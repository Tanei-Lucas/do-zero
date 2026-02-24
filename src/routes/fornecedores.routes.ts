import { FornecedorController } from "../modules/Fornecedor/controller/FornecedorController";
import { Router } from "express";

const fornecedorRouter = Router()

const fornecedorController = new FornecedorController()

fornecedorRouter.post("/", fornecedorController.create);

fornecedorRouter.get("/", fornecedorController.findAll);

fornecedorRouter.delete("/:id", fornecedorController.delete);

fornecedorRouter.put("/:id", fornecedorController.update);

fornecedorRouter.patch("/:id/status", fornecedorController.updateStatus);

export {fornecedorRouter}