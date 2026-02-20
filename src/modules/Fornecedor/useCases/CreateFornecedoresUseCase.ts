import { ICreateFornecedoresDTO } from "../dtos/ICreateFornecedorsDTO";
import { Fornecedor } from "../entities/fornecedor";
import { FornecedorRepository } from "../repositories/FornecedoresRepository";
import { removeSpecialChars } from "../../../shared/utils/removeSpecialChars";
import { error } from "console";

export class CreateFornecedoresUseCase{
    async execute(data: ICreateFornecedoresDTO): Promise<Fornecedor>{
        const fornecedorRepository = new FornecedorRepository()

         const cnpjLimpo = data.cnpj.replace(/[^\d]/g, '');

         const fornecedorExistente = await fornecedorRepository.findByCnpj(cnpjLimpo);

        const CnpjInvalid = removeSpecialChars(data.cnpj)

        if(CnpjInvalid.length !== 14 ){
            throw new Error("Cnpj Deve conter 14 caracteres")
        }

        if(fornecedorExistente){
            throw new Error("Cnpj já cadastrado")
        }

        return await fornecedorRepository.create(data)
    }
}