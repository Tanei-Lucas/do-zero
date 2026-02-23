import { FornecedorController } from "../modules/Fornecedor/controller/fornecedorController";
import { Router } from "express";

const fornecedorRouter = Router()

const fornecedorController = new FornecedorController()

fornecedorRouter.post("/", fornecedorController.create);

fornecedorRouter.get("/", fornecedorController.findAll);


export {fornecedorRouter}