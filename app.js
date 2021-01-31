import express from "express";
import morgan from "morgan";
import mainRouter from "./src/router";
import connectMongo from "./src/config/mongoconnect";

const app = express();

// Production enviroment
const isProduction = process.env.NODE_ENV === "production";
app.use(express.json());

//https debug
app.use(morgan("dev"));

//Connect Mongo
connectMongo();

app.use("/", mainRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on isProductionss => ${isProduction}`);
  console.log(`Server is running on PORT ${PORT}`);
});
