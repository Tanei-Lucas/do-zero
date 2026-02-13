import { Router } from "express";
import { ProductController} from "../modules/products/controller/ProductController";

const productRouter = Router()

const productController = new ProductController()

productRouter.post("/", productController.create);

productRouter.get("/", productController.findAll);

productRouter.get("/:id", productController.findById);

productRouter.delete("/:id", productController.delete);

productRouter.put("/:id", productController.update);

export {productRouter}