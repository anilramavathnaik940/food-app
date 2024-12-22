import express from "express";
import Stripe from "stripe";
import cors from "cors";
import router from "./routers/userRouter.js";
import blogsRouter from "./routers/blogsRouter.js";
import cookieParser from "cookie-parser";
import foodrouter from "./routers/foodRouter.js";
import connectDB from "./db.js";

const app = express();
const port = 8080;

const stripe = new Stripe("sk_test_51QYn9RCeeLGWcusTIBii3BT849wIov0E55pzW5lRUFiNtP11UxNhrefOmWetgipOSnfjPSB1RieOZJXAFb3cTaS700vxsao1Ta");

app.use(express.json());

connectDB().then(()=> app.listen(port))
  .then(() => console.log(`Connected to DataBase and Listening to Port ${port}`))
  .catch((err) => console.log("Error is occured", err));

const corsOptions = {
    origin: "http://localhost:3000", 
    methods: "GET,HEAD,PUT,POST,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api/user", router);
app.use("/api/blogs", blogsRouter);
app.use("/api/food", foodrouter);

app.post("/api/pay", async (req, res) => {
    const { amount, currency } = req.body; // Amount in smallest currency unit (e.g., cents for USD)

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
        });

        res.status(200).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error.message);
        res.status(500).send({ error: error.message });
    }
});

app.post("/api/webhook", express.raw({ type: "application/json" }), (req, res) => {
  const event = req.body;

  switch (event.type) {
      case "payment_intent.succeeded":
          console.log("Payment was successful!");
          break;
      case "payment_intent.payment_failed":
          console.log("Payment failed!");
          break;
      default:
          console.log(`Unhandled event type ${event.type}`);
  }

  res.status(200).send();
});

