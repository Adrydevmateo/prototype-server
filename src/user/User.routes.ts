import express, { type Request, type Response } from "express";
import { User } from "./User";

const router = express.Router();

// middleware that is specific to this route
const x = (req: Request, res: Response, next: () => void) => {
  if (false) {
    res.json({ sorry: "Not Allowed" });
    return;
  }
  next();
};

router.use(x);

router.get("/", (_req: Request, res: Response) => {
  const user = new User("123", "John");
  console.log("@@ User: ", user);
  res.json(user);
});

export default router;
