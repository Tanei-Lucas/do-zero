import { FindAllFornecedorUseCase } from "../useCases/findAllFornecedorUseCase";
import { CreateFornecedoresUseCase } from "../useCases/CreateFornecedoresUseCase";
import { Request,Response } from "express";
import { IFilterFornecedorDTO } from "../dtos/IFilterFornecedorDTO";
import { ICreateFornecedoresDTO } from "../dtos/ICreateFornecedorsDTO";


export class FornecedorController{
    async create(request: Request, response: Response){
        const data = request.body
        const createFornecedoresUseCase= new CreateFornecedoresUseCase()
        const createFornecedor= createFornecedoresUseCase.execute(data)
       
        return response.status(201).json(createFornecedor)
    }
}