import { Router } from "express";
import { createProductController} from "../modules/products/useCases/CreateProductController";

const productRouter = Router()

const CreateProductController = new createProductController()

productRouter.post("/", createProductController.handle);

export {productRouter}