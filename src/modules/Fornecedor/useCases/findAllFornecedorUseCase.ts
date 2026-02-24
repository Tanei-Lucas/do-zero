import { FornecedorRepository } from "../repositories/FornecedoresRepository";
import { IFilterFornecedorDTO } from "../dtos/IFiltersFornecedorDTO";


export class FindAllFornecedorUseCase {

    async execute(filters?: IFilterFornecedorDTO) {
        const fornecedorRepository = new FornecedorRepository()
        const fornecedores = await fornecedorRepository.list(filters)
        return fornecedores
    }
}