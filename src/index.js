import express from "express";
import productRoutes from "./products.routes.js";
import categoryRoutes from "./categories.routes.js";
import userRoutes from "./users.routes.js";
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

// routes
app.use(productRoutes);
app.use(categoryRoutes);
app.use(userRoutes);

app.listen(PORT);
// eslint-disable-next-line no-console
console.log("Server on port", PORT);
