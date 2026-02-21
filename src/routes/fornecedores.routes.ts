import { FornecedorController } from "../modules/Fornecedor/controller/fornecedorController";
import { Router } from "express";

const fornecedorRoute = Router()

const fornecedorController = new FornecedorController()

fornecedorRoute.post("/", fornecedorController.create);

fornecedorRoute.get("/", fornecedorController.findAll);


export {fornecedorRoute}