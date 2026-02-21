import { FindAllFornecedorUseCase } from "../useCases/findAllFornecedorUseCase";
import { CreateFornecedoresUseCase } from "../useCases/CreateFornecedoresUseCase";
import { Request, Response } from "express";
import { IFilterFornecedorDTO } from "../dtos/IFiltersFornecedorDTO";

export class FornecedorController {
    async create(request: Request, response: Response) {
        const data = request.body
        const createFornecedoresUseCase = new CreateFornecedoresUseCase()
        const createFornecedor = await createFornecedoresUseCase.execute(data)

        return response.status(201).json(createFornecedor)
    }

    async findAll(request: Request, response: Response) {

        const data = request.query as unknown as IFilterFornecedorDTO

        const findAllFornecedorUseCase = new FindAllFornecedorUseCase()

        const fornecedor = await findAllFornecedorUseCase.execute(data)

        return response.status(200).json(fornecedor)

    }

}