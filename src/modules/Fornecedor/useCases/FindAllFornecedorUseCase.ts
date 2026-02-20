
import { FindOptionsWhere, ILike } from "typeorm";
import { IFilterFornecedorDTO } from "../dtos/IFilterFornecedorDTO";
import { Fornecedor } from "../entities/fornecedor";
import { FornecedorRepository } from "../repositories/FornecedoresRepository";

export class FindAllFornecedorUseCase{
    async execute(filters: IFilterFornecedorDTO): Promise<Fornecedor[]>{       
        const fornecedorRepository = new FornecedorRepository()

        const where: FindOptionsWhere<Fornecedor> = {}

        if (filters?.nome) {
            where.nome = ILike(`%${filters.nome}%`)
        }

        if (filters?.email) {
            where.email = ILike(`%${filters.email}%`)
        }

        if (filters?.cnpj) {
            where.cnpj = ILike(`%${filters.cnpj}%`)
        }

        if (filters?.telefone) {
            where.telefone = ILike(`%${filters.telefone}%`)
        }

        return await fornecedorRepository.list(filters)
    }
}
