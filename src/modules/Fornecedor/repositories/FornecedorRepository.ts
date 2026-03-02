import { AppDataSource } from "../../../shared/infra/typeorm";
import { Fornecedor } from "../entities/Fornecedor";
import { FindOptionsWhere, ILike, Repository } from "typeorm";
import { ICreateFornecedorDTO } from "../dtos/ICreateFornecedorDTO";
import { IFilterFornecedorDTO } from "../dtos/IFiltersFornecedorDTO";
import { IUpdateFornecedoresDTO } from "../dtos/IUpdateFornecedoresDTO";


export interface IFornecedorRepository{
    create(data: ICreateFornecedorDTO): Promise<Fornecedor>;
    list(filters?: IFilterFornecedorDTO): Promise<Fornecedor[]>;
    findById(id: string): Promise<Fornecedor | null>;
    findByCnpj(cnpj: string): Promise<Fornecedor | null>;
    update(id: string, data: IUpdateFornecedoresDTO): Promise<void>;
    delete(id: string): Promise<void>;
    findByEmail(email: string): Promise<Fornecedor | null>
}

export class FornecedorRepository implements IFornecedorRepository{
    private repository: Repository<Fornecedor>


constructor(){
    this.repository = AppDataSource.getRepository(Fornecedor);
}

    async create(data: ICreateFornecedorDTO): Promise<Fornecedor>{
        const fornecedor = this.repository.create(data);
        return await this.repository.save(fornecedor)
    }

    async list(filters?: IFilterFornecedorDTO): Promise<Fornecedor[]> {
        const nome = filters?.nome ? ILike(`%${filters.nome}%`) : undefined
        const email = filters?.email ? ILike(`%${filters.email}%`) : undefined
        const cnpj = filters?.cnpj ? ILike(`%${filters.cnpj}%`) : undefined
        const telefone = filters?.telefone ? ILike(`%${filters.telefone}%`) : undefined

        const where: FindOptionsWhere<Fornecedor> = {
            nome,
            email,
            cnpj,
            telefone,
        }

        return await this.repository.find({ where })

}

async findById(id: string): Promise<Fornecedor | null> {
    return await this.repository.findOneBy({id})
} 

async update(id: string, data: IUpdateFornecedoresDTO): Promise<void> {
    await this.repository.update(id, data)
}

async delete(id: string): Promise<void> {
    await this.repository.delete(id)
}
 

async findByCnpj(cnpj: string): Promise<Fornecedor | null>{
    return await this.repository.findOne({
        where:{cnpj}
    })    
} 

async findByEmail(email: string): Promise<Fornecedor | null>{
    return await this.repository.findOne({
        where:{email}
    })
}
}

