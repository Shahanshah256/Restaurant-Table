const errorMiddleware = require("../error/error");
const Reservation = require("../models/reservationSchema");

const secondReservation = async (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    reservationDate,
    reservationTime,
  } = req.body;

  // ✅ correct validation
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !reservationDate ||
    !reservationTime
  ) {
    return next(
      new errorMiddleware.ErrorHandler(
        "Please fill full reservation form!",
        400,
      ),
    );
  }
  console.log("BODY DATA 👉", req.body);
  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      reservationDate,
      reservationTime,
    });

    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const validationErrors = Object.values(err.errors).map((e) => e.message);

      return next(
        new errorMiddleware.ErrorHandler(validationErrors.join(", "), 400),
      );
    }

    return next(err);
  }
};

module.exports = { secondReservation };
