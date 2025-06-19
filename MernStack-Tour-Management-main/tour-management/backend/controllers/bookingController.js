import Booking from "../models/Booking.js";

// Create New Booking
export const createBooking = async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    const savedBooking = await newBooking.save();
    console.log(savedBooking);
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    console.error("Error in createBooking:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get Single Booking
export const getBooking = async (req, res) => {
  const id = req.params.id;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking fetched successfully",
      data: booking,
    });
  } catch (err) {
    console.error("Error in getBooking:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// Get All Bookings
export const getAllBooking = async (req, res) => {
  try {
    const bookings = await Booking.find();

    res.status(200).json({
      success: true,
      message: "All bookings fetched successfully",
      data: bookings,
    });
  } catch (err) {
    console.error("Error in getAllBooking:", err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
