const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "Restaurant",
    });

    console.log("Connected to database successfully");
  } catch (err) {
    console.log("Some error:", err);
  }
};

module.exports = dbConnection;
