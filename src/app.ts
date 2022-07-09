import express, { Application } from "express";
import { config } from "dotenv";
import { httpErrorHandler, errorHandler } from "./middlewares/middlewares";
import router from "./routes";

config();
const app: Application = express();

app.use("/", router);
app.use(httpErrorHandler);
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port: number = Number(process.env.PORT) || 4000;
app.listen(port, () => console.log(`Server Running on port: ${port}`));
