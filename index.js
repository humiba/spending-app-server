const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { Sequelize } = require("sequelize");
const cors = require("cors");

require("dotenv").config();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());

// Define base API URL: from localhost:5000 to localhost:5000/api
const BASE_API_URL = "/api";

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routers
const categoryRouter = require("./routers/categoryRouter");

// Use Routers
app.use(BASE_API_URL, categoryRouter);

// Run the Application
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Connect to MySQL
const sequelize = new Sequelize("spendingapp", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
