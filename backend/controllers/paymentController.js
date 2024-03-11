const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Dummy stripe object for demonstration
const stripe = {
  paymentIntents: {
    create: async () => ({
      client_secret: "dummy_client_secret"
    })
  }
};

// Process payment endpoint without Stripe integration
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  // Dummy payment processing
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "ShopEasy",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

// Endpoint to send Stripe API key without actual integration
exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  // Dummy response with a fake Stripe API key
  res.status(200).json({ stripeApiKey: "fake_stripe_api_key" });
});
