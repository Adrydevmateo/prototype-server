import express, { Request, Response } from "express";
import { User } from "./user/User";

const app = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  const user = new User("123", "John");
  res.json({ msg: "Hello World" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
