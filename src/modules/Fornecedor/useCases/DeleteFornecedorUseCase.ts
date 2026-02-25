import { FornecedorRepository } from "../repositories/FornecedorRepository" 

export class DeleteFornecedorUseCase {
    async execute(id: string){
    const fornecedorRepository = new FornecedorRepository()
    await fornecedorRepository.delete(id)
    }
}