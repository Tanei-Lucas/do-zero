import { Router } from "express";
import { ClienteController } from "../modules/products/controller/ClienteController";

const clientetRouter = Router()

const clienteController = new ClienteController()

clientetRouter.post("/", clienteController.create)