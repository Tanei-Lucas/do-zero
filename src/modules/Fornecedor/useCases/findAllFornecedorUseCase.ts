import { FornecedorRepository } from "../repositories/FornecedoresRepository";
import { IFilterFornecedorDTO } from "../dtos/IFiltersFornecedorDTO";


export class FindAllFornecedorUseCase{
    
async execute(filters?: IFilterFornecedorDTO){
    const fornecedorRepository = new FornecedorRepository()
    const fornecedor = await fornecedorRepository.list(filters)
    
    if(fornecedor){
        return fornecedor
    }
    throw new Error("Nada encontrado")

}
}