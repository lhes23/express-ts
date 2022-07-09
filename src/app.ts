import express, { Application } from "express";
import { config } from "dotenv";
import {
  createHttpErrorHandler,
  errorHandler,
} from "./middlewares/middlewares";
config();
import router from "./routes";

const app: Application = express();

app.use("/", router);
app.use(createHttpErrorHandler);
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = Number(process.env.PORT) || 4000;
app.listen(port, () => console.log(`Server Running on port: ${port}`));
