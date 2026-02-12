import { Request, Response } from "express";
import { CreateProductUseCase } from "../useCases/createProductUsecase";
import { FindAllProductUseCase } from "../useCases/FindAllProductsUseCase";
import { IFilterProductsDTO } from "../dtos/IFilterProductsDTO";

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
}