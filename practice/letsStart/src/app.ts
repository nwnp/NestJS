import * as express from "express";
import { Cat, CatType } from "./app.model";

const app: express.Express = express();

app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`this is logging middleware: ${req.rawHeaders[1]}`);
    next();
  }
);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

app.get("/cats/blue", (req, res) => {
  res.send({ cats: Cat, blue: Cat[0] });
});

app.get("/cats/som", (req, res) => {
  res.send({ som: Cat[0] });
});

app.use((req, res, next) => {
  const error = {
    status: "404",
    msg: "Not Found Page",
  };
  console.log("this is error middleware");
  res.send(`<h1>${error.status} ${error.msg}</h1>`);
});

app.listen(8080, () => {
  console.log("Server is on...");
});
