import { Router } from "express";
import { ClienteControllerimport } from "../../src/modules/clientes/controller/ClienteController"

const clienteRouter = Router()

const clienteController = new ClienteControllerimport()

clienteRouter.post("/", clienteController.create)

clienteRouter.get("/", clienteController.findAll)

clienteRouter.get("/:id", clienteController.findById)

clienteRouter.delete("/:id", clienteController.delete)

clienteRouter.put("/:id", clienteController.update)

export {clienteRouter}