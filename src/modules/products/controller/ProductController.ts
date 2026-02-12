import { Request, Response } from "express";
import { CreateProductUseCase } from "../useCases/createProductUsecase";
import { FindAllProductUseCase } from "../useCases/FindAllProductsUseCase";
import { IFilterProductsDTO } from "../dtos/IFilterProductsDTO";
import { FindByIdProductUseCase } from "../useCases/FindbyIdProductUseCase";
import {DeleteProductByIdUseCase} from"../useCases/DeleteProductByIdUseCase";
import { promises } from "dns";


export class ProductController {
    async create(request: Request, response: Response): Promise<Response> {
        const { nome, preco } = request.body;
        const createProductUseCase = new CreateProductUseCase()
        const createdProduct = await createProductUseCase.execute({ nome, preco });

        return response.status(201).json(createdProduct);

    }

    async findAll(request: Request, response: Response): Promise<Response> {
        const {nome, preco} = request.query as unknown as IFilterProductsDTO
        const findAllProductUseCase = new FindAllProductUseCase()
        const findProductAll = await findAllProductUseCase.execute({nome, preco});
        return response.status(201).json(findProductAll);
    }

    async findById(request: Request, response: Response): Promise<Response> {
        const {id} = request.params 
        const  findByIdProductUseCase = new FindByIdProductUseCase()
        const product = await findByIdProductUseCase.execute(Number(id));
        return response.status(201).json(product);
    }

    async delete(request: Request, response: Response):Promise<Response>{
        const {id} = request.params;
        const deleteProductByIdUseCase = new DeleteProductByIdUseCase;
        await deleteProductByIdUseCase.execute(Number(id));
        return response.status(204).json()
    }

}