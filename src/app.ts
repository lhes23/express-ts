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
config();

const app: Application = express();

const port: number = Number(process.env.PORT) || 4000;
const initialMsg = `Server running on port: ${port}`;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send(initialMsg);
});

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new createHttpError.NotFound());
});

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  res
    .status(err.status || 500)
    .send({ status: err.status, message: err.message });
};
app.use(errorHandler);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const server: Server = app.listen(port, () => console.log(initialMsg));
