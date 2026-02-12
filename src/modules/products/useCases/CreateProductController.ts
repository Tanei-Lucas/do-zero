import {Request, Response} from "express";
import { CreateProductUseCase } from "./createProductUsecase";

export class CreateProductController {
    
    async handle(request:Request, response:Response): Promise<Response>{ 
    const {nome, preco} = request.body;
    const createProductUseCase = new CreateProductUseCase()
const createdProduct = await createProductUseCase.execute({ nome, preco });

    return response.status(201).json(createdProduct);

    }
}