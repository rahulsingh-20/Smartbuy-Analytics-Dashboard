const app = require("./app");

const dotenv = require("dotenv");

const connectDatabase = require("./config/database");

// handling uncaught exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down due to Uncaught Exception`);
  process.exit(1);
});

// defining config file for process variables
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on ${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
