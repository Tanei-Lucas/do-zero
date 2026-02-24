import { FindAllFornecedorUseCase } from "../useCases/findAllFornecedorUseCase";
import { CreateFornecedoresUseCase } from "../useCases/CreateFornecedoresUseCase";
import { Request, Response } from "express";
import { IFilterFornecedorDTO } from "../dtos/IFiltersFornecedorDTO";
import { FornecedorRepository } from "../repositories/FornecedoresRepository";

export class FornecedorController {
    async create(request: Request, response: Response) {
        const data = request.body
        const createFornecedoresUseCase = new CreateFornecedoresUseCase()
        const createdFornecedor = await createFornecedoresUseCase.execute(data)

        return response.status(201).json(createdFornecedor)
    }

    async findAll(request: Request, response: Response) {

        const data = request.query as unknown as IFilterFornecedorDTO

        const findAllFornecedorUseCase = new FindAllFornecedorUseCase()

        const fornecedores = await findAllFornecedorUseCase.execute(data)

        return response.status(200).json(fornecedores)

    }

    async delete(request: Request, response: Response){

        const {id} = request.params

        const fornecedorRepository = new FornecedorRepository()

        await fornecedorRepository.delete(Number(id))

        return response.status(204).json()

    }

}