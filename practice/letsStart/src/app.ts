import * as express from "express";
import catsRouter from "./cats/cats.route";

const app: express.Express = express();

/** logging middleware */
app.use(
  (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(`this is logging middleware: ${req.rawHeaders[1]}`);
    next();
  }
);

/** json middleware */
// 이 middleware가 없으면 req.body가 undefined로 들어오게 됨
app.use(express.json());

/** route 등록 */
app.use("/cats", catsRouter);

/** 404 middleware */
app.use((req, res, next) => {
  const error = {
    status: "404",
    msg: "Not Found Page",
  };
  console.log("this is error middleware");
  res.send(`<h1>${error.status} ${error.msg}</h1>`);
});

app.listen(8080, () => {
  console.log("Server(8080) is on...");
});
