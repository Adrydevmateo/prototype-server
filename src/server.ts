import express, { type Request, type Response } from "express";

// routes
import userRoutes from "./user/User.routes";

const app = express();
const port = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.json({ msg: "Hello World" });
});

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
