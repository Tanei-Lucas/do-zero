import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express"; 
import { productRouter } from "./routes/product.routes";
import {clienteRouter} from "./routes/cliente.routes";
import { categoriaRouter } from "./routes/categoria.routes";
import { fornecedorRoute } from "./routes/fornecedores.routes";

const app = express();

app.use(express.json());

app.use("/products", productRouter);

app.use("/clientes", clienteRouter);

app.use("/categorias", categoriaRouter);

app.use("/fornecedores", fornecedorRoute)


app.listen(3333, () => console.log("servidor rodando na porta 3333"));

