import * as express from "express";

const app: express.Express = express();
const PORT: number = 8080;

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ name: "jin" });
});

app.listen(PORT, () => {
  console.log(PORT, "번에서 대기 중....");
});
