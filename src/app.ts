import express, {
  Application,
  NextFunction,
  Request,
  Response,
  ErrorRequestHandler,
} from "express";
import { Server } from "http";
import createHttpError from "http-errors";
import { config } from "dotenv";
import {
  createHttpErrorHandler,
  errorHandler,
} from "./middlewares/middlewares";
config();

const app: Application = express();

const port: number = Number(process.env.PORT) || 4000;
const initialMsg = `Server running on port: ${port}`;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(initialMsg);
});

app.use(createHttpErrorHandler);
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server: Server = app.listen(port, () => console.log(initialMsg));
