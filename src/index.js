import express from "express";
import productRoutes from "./products.routes.js";
import morgan from "morgan";
import { PORT } from "./config.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your Client app's domain
    credentials: true, // Allow cookies
  }),
);

app.use(morgan("dev"));

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const welcome = async (req, res) => {
  res
    .status(200)
    .send(
      "hey welcome!! this is a free api with endpoints of products, categories and users, built using express and connects to a MySQl database",
    );
};

app.get("/", welcome);

// routes
app.use(productRoutes);

app.listen(PORT);
// eslint-disable-next-line no-console
console.log("Server on port", PORT);
