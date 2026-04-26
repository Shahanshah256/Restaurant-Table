const express = require("express");
const { secondReservation } = require("../controller/reservation");
const router = express.Router();
// console.log(secondReservation);
router.post("/send", secondReservation);
module.exports = router;
