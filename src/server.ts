import "reflect-metadata";
import { Express } from "express";
import { productRouter } from "./routes/product.routes";

const app = expless();

app.use = express.json();

app.use("/products", productRouter);

app.listen(3333, () => console.log("servidor rodando na porta 3333"));