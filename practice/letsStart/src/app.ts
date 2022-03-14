import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

const data = [1, 2, 3];

app.get("/", (req: express.Request, res: express.Response) => {
  console.log(req);
  res.send({ cats: Cat });
});

app.listen(8080, () => {
  console.log("Server is on...");
});
