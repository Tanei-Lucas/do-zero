import { FornecedorRepository } from "../repositories/FornecedoresRepository" 

export class DeleteFornecedorByIdUseCase {
    async execute(id: number){
    const fornecedorRepository = new FornecedorRepository()
    await fornecedorRepository.delete(id)
    }
}