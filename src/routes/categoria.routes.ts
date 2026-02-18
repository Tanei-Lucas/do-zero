import { CategoriaController } from "../modules/products/controller/CategoriaController";
import { Router } from "express";

const categoriaRouter = Router()

const categoriaController = new CategoriaController()

categoriaRouter.post("/", categoriaController.create)

categoriaRouter.get("/", categoriaController.list)

categoriaRouter.get("/:id", categoriaController.findById)

export{categoriaRouter}
