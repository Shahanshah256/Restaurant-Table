const mongoose = require("mongoose");
const validator = require("validator");

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name must contain at least 3 characters"],
    maxLength: [30, "First name cannot exceed 30 characters"],
    trim: true,
  },

  lastName: {
    type: String,
    required: true,
    minLength: [3, "Last name must contain at least 3 characters"],
    maxLength: [30, "Last name cannot exceed 30 characters"],
    trim: true,
  },

  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
    lowercase: true,
    trim: true,
  },

  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must be 10 digits"],
    maxLength: [10, "Phone number must be 10 digits"],
  },

  // ✅ Better: Date ko Date type me rakho
  reservationDate: {
    type: Date,
    required: true,
  },

  // ✅ Time slot
  reservationTime: {
    type: String,
    required: true,
  },

  // ✅ Optional: number of guests
  //   guests: {
  //     type: Number,
  //     required: true,
  //     min: [1, "At least 1 guest required"],
  //     max: [10, "Maximum 10 guests allowed"],
  //   },

  //   // ✅ Optional: status (future use)
  //   status: {
  //     type: String,
  //     enum: ["pending", "confirmed", "cancelled"],
  //     default: "pending",
  //   },
  // },
  // {
  //   timestamps: true, // 🔥 auto createdAt & updatedAt
});

// ✅ Model
const Reservation = mongoose.model("Reservation", reservationSchema);

// ✅ Export
module.exports = Reservation;
