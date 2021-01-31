import express from "express";
import { userRoutes } from "../../routes/user";

const apiRoutes = express.Router();

apiRoutes.get("/", function (req, res, next) {
  res.json({ message: "from index api" });
});

apiRoutes.use("/auth", userRoutes);

export default apiRoutes;
