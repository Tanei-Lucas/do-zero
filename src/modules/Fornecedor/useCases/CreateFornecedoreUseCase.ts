import { Fornecedor } from "../entities/Fornecedor";
import { ICreateFornecedorDTO } from "../dtos/ICreateFornecedorDTO";
import { FornecedorRepository } from "../repositories/FornecedorRepository";
import { removeSpecialChars } from "../../../shared/utils/removeSpecialChars";
 
export class CreateFornecedorUseCase{
    async execute(data: ICreateFornecedorDTO): Promise<Fornecedor>{
        const fornecedorRepository = new FornecedorRepository()
 
        const cnpjLimpo = removeSpecialChars(data.cnpj)
 
        const emailExistente = await fornecedorRepository.findByEmail(data.email);
        if (emailExistente) {
            throw new Error("Email já cadastrado no sistema");
        }
 
        if(cnpjLimpo.length !== 14 ){
            throw new Error("Cnpj Deve conter 14 caracteres")
        }
 
        const fornecedorExistente = await fornecedorRepository.findByCnpj(cnpjLimpo)
        if(fornecedorExistente){
            throw new Error("Cnpj já cadastrado")
        }
 
        return await fornecedorRepository.create(data)
    }
}