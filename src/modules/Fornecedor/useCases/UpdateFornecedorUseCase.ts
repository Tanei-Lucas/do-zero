import { IUpdateFornecedoresDTO } from "../dtos/IUpdateFornecedoresDTO";
import { FornecedorRepository } from "../repositories/FornecedorRepository";

export class UpdateFornecedorUseCase {
    async execute(id: string, data: IUpdateFornecedoresDTO) {
        const fornecedorRepository = new FornecedorRepository();

        const fornecedor = await fornecedorRepository.findById(id);
        if (!fornecedor) {
            throw new Error("Fornecedor não encontrado");
        }

        await fornecedorRepository.update(id, data);

        return await fornecedorRepository.findById(id);
    }
}