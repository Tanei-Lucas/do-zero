import { Router } from "express";
import { CreateProductController} from "../modules/products/useCases/CreateProductController";

const productRouter = Router()

const createProductController = new CreateProductController()

productRouter.post("/", createProductController.handle);

export {productRouter}