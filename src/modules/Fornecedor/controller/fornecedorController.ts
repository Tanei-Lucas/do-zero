import { FindAllFornecedorUseCase } from "../useCases/findAllFornecedorUseCase";
import { CreateFornecedorUseCase } from "../useCases/CreateFornecedoreUseCase";
import { UpdateFornecedorUseCase } from "../useCases/UpdateFornecedorUseCase";
import { Request, Response } from "express";
import { IFilterFornecedorDTO } from "../dtos/IFiltersFornecedorDTO";
import { IUpdateFornecedoresDTO } from "../dtos/IUpdateFornecedoresDTO";
import { FornecedorRepository } from "../repositories/FornecedorRepository";

export class FornecedorController {
    async create(request: Request, response: Response) {
        const data = request.body
        const createFornecedorUseCase = new CreateFornecedorUseCase()
        const createdFornecedor = await createFornecedorUseCase.execute(data)

        return response.status(201).json(createdFornecedor)
    }

    async findAll(request: Request, response: Response) {
        const data = request.query as unknown as IFilterFornecedorDTO

        const findAllFornecedoresUseCase = new FindAllFornecedorUseCase()

        const fornecedores = await findAllFornecedoresUseCase.execute(data)

        return response.status(200).json(fornecedores)
    }

    async delete(request: Request, response: Response) {
        const id = String(request.params.id)

        const fornecedorRepository = new FornecedorRepository()
        await fornecedorRepository.delete(id)

        return response.status(204).json()
    }

    async update(request: Request, response: Response) {
        try {
            const id = String(request.params.id)
            const data = request.body as IUpdateFornecedoresDTO

            const updateFornecedorUseCase = new UpdateFornecedorUseCase()
            const updatedFornecedor = await updateFornecedorUseCase.execute(id, data)

            return response.status(200).json(updatedFornecedor)
        } catch (err) {
            const message = err instanceof Error ? err.message : "Erro ao atualizar fornecedor"

            if (message === "Fornecedor não encontrado") {
                return response.status(404).json({ message })
            }

            return response.status(400).json({ message })
        }
    }

    async updateStatus(request: Request, response: Response) {
        try {
            const id = String(request.params.id)
            const { ativo } = request.body as { ativo?: unknown }

            if (typeof ativo !== "boolean") {
                return response.status(400).json({ message: "Campo 'ativo' deve ser boolean (true/false)" })
            }

            const updateFornecedorUseCase = new UpdateFornecedorUseCase()
            const updatedFornecedor = await updateFornecedorUseCase.execute(id, { ativo })

            return response.status(200).json(updatedFornecedor)
        } catch (err) {
            const message = err instanceof Error ? err.message : "Erro ao atualizar status do fornecedor"

            if (message === "Fornecedor não encontrado") {
                return response.status(404).json({ message })
            }

            return response.status(400).json({ message })
        }
    }
}