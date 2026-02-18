import { CategoriaController } from "../modules/categorias/controller/CategoriaController";
import { Router } from "express";

const categoriaRouter = Router()

const categoriaController = new CategoriaController()

categoriaRouter.post("/", categoriaController.create)

categoriaRouter.get("/", categoriaController.list)

categoriaRouter.get("/:id", categoriaController.findById)

categoriaRouter.put("/:id", categoriaController.update)

categoriaRouter.delete("/:id", categoriaController.delete)

export{categoriaRouter}
