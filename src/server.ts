import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express"; 
import { productRouter } from "./routes/product.routes";

const app = express();

app.use(express.json());

app.use("/products", productRouter);

app.listen(3333, () => console.log("servidor rodando na porta 3333"));