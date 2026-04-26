// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const dbConnection = require("../Backend/database/dbConnection");
// const { errorMiddleware } = require("./error/error");

// const app = express();

// dotenv.config();
// app.use(errorMiddleware);
// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   }),
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use("/api/reservation", require("./routes/reservationRoutes"));
// // routes ke baad
// app.use(errorMiddleware);
// dbConnection();

// module.exports = app;

require("dotenv").config(); // 🔥 sabse pehle

const express = require("express");
const cors = require("cors");
const dbConnection = require("./database/dbConnection");
const { errorMiddleware } = require("./error/error");

const app = express();

app.use(
  cors({
    origin: "*", // test ke liye
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/reservation", require("./routes/reservationRoutes"));

// ✅ error middleware last me
app.use(errorMiddleware);

// ✅ DB connect
dbConnection();

module.exports = app;
