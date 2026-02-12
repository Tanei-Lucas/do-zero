import { Router } from "express";
import { ProductController} from "../modules/products/controller/ProductController";

const productRouter = Router()

const productController = new ProductController()

productRouter.post("/", productController.create);

productRouter.get("/", productController.findAll);

productRouter.get("/:id", productController.findById);

export {productRouter}