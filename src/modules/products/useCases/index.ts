import {  iProductsRepository} from "../repositories/IproductsRepository";
import { CreateProductUseCase } from "./createProductUsecase";
import { createProductController } from "./CreateProductController";

const ProductsRepository = new iProductsRepository ();
const createProductUseCase = new CreateProductUseCase(ProductsRepository);
const CreateProductController = new createProductController(createProductUseCase);

export { createProductController }