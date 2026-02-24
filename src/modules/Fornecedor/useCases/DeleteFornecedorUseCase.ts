import { FornecedorRepository } from "../repositories/FornecedoresRepository" 

export class DeleteFornecedorUseCase {
    async execute(id: string){
    const fornecedorRepository = new FornecedorRepository()
    await fornecedorRepository.delete(id)
    }
}