const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

// Dummy controller functions for demonstration
const processPayment = (req, res, next) => {
  // Dummy logic for processing payment
  res.status(200).json({ message: "Payment processed successfully" });
};

const sendStripeApiKey = (req, res, next) => {
  // Dummy response with a fake Stripe API key
  res.status(200).json({ stripeApiKey: "fake_stripe_api_key" });
};

// Routes without Stripe payment integration
router.route("/payment/process").post(isAuthenticatedUser, processPayment);
router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;
