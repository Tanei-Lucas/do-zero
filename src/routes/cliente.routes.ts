import { Router } from "express";
import { ClienteController } from "../modules/clientes/controller/ClienteController";

const clienteRouter = Router()

const clienteController = new ClienteController()

clienteRouter.post("/", clienteController.create)

clienteRouter.get("/", clienteController.findAll)

clienteRouter.get("/:id", clienteController.findById)

clienteRouter.delete("/:id", clienteController.delete)

clienteRouter.put("/:id", clienteController.update)

export {clienteRouter}