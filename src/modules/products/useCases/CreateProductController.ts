import {Request, Response} from "express";
import { CreateProductUseCase } from "./createProductUsecase";

export class createProductController {
    constructor(private CreateProductUseCase: CreateProductUseCase){}
    
    async handle(request:Request, response:Response): Promise<Response>{ 
    const {nome, preco} = request.body;
    
    await this.CreateProductUseCase.execute({ nome, preco });

    return response.status(201).send();

    }
}