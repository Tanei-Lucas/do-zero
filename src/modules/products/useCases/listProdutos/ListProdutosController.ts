import { Request, Response } from "express";
import {ListProductsUseCase} from "../listProdutos/ListProdutosUsecase";

export class ListproductsController{
    constructor(private listProductUsecase: ListProductsUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const all = await this.listProductUsecase.execute();

        return response.json(all)
    }
}