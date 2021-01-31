import express from "express";
import userController from "../controllers/user";
import { asyncWrapper } from "../utils/asyncWrapper";

const userRoutes = express.Router();

userRoutes.get("/", function (req, res, next) {
  res.json({ message: "from index api" });
});

// Create
userRoutes.post("/register", asyncWrapper(userController.register));

// Login
userRoutes.post("/login", asyncWrapper(userController.login));

//GetAll Data
userRoutes.get("/users", asyncWrapper(userController.findAll));

//GetBy ID
userRoutes.get("/users/:userId", asyncWrapper(userController.findOne));

//update by ID
userRoutes.put("/users/:userId", asyncWrapper(userController.update));

//Delete
userRoutes.delete("/users/:userId", asyncWrapper(userController.delete));

export { userRoutes };
