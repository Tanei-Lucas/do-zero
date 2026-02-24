import { ICreateFornecedoresDTO } from "../dtos/ICreateFornecedorsDTO";
import { Fornecedor } from "../entities/Fornecedor";
import { FornecedorRepository } from "../repositories/FornecedoresRepository";
import { removeSpecialChars } from "../../../shared/utils/removeSpecialChars";

export class CreateFornecedoresUseCase{
    async execute(data: ICreateFornecedoresDTO): Promise<Fornecedor>{
        const fornecedorRepository = new FornecedorRepository()

        const CnpjInvalid = removeSpecialChars(data.cnpj)

        const emailExistente = await fornecedorRepository.findByEmail(data.email);
        if (emailExistente) {
            throw new Error("Email já cadastrado no sistema");
        }

        if(CnpjInvalid.length !== 14 ){
            throw new Error("Cnpj Deve conter 14 caracteres")
        }

        if(CnpjInvalid){
            throw new Error("Cnpj já cadastrado")
        }

        return await fornecedorRepository.create(data)
    }
}