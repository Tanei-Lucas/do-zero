import { IUpdateFornecedoresDTO } from "../dtos/IUpdateFornecedoresDTO";
import { FornecedorRepository } from "../repositories/FornecedoresRepository";


export class UpdateFornecedorUseCase {
    async execute(id: string, data: IUpdateFornecedoresDTO): Promise<void> {
        const fornecedorRepository = new FornecedorRepository();
        const update = await fornecedorRepository.findById(id)

        if (update) {
            return await fornecedorRepository.update(Number(id), data)
        }
        throw new Error("Fornecedor não existe")
    }
}