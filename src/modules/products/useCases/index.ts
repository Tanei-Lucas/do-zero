import { iProductsRepository } from "../repositories/IproductsRepository"
import { CreateProductUseCase } from "./createProductUsecase";
import { createProductController } from "./CreateProductController";


const productsRepository = new iProductsRepository();

const createProductUseCase = new CreateProductUseCase(productsRepository);

const createProductControllerInstance = new createProductController(createProductUseCase);

export { createProductControllerInstance as createProductController };