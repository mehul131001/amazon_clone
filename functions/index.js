const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KY7FCSFxrFhouCnX5Q7Trcih1MWKArOdmDdqfbMNhUYmZdMLEqbMnmD9EhgnO47vGcKRPmsXoenHH9xtoN45F7w00oUk6VVE8"
);

// API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //ok - created
  response.status(201).send({
      clientSecret: paymentIntent.client_secret,
  })
});

// - Listen command
exports.api = functions.https.onRequest(app);

//example end point
// http://localhost:5001/challenge-108d7/us-central1/api
