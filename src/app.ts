import express, { Application } from "express";
import { config } from "dotenv";
import { httpErrorHandler, errorHandler } from "./middlewares/middlewares";
import router from "./routes";

// Initialize App
config();
const app: Application = express();

// Middlewares
app.use(httpErrorHandler);
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/", router);

const port: number = Number(process.env.PORT) || 4000;
app.listen(port, () => console.log(`Server Running on port: ${port}`));
