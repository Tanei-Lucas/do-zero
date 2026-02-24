import { AppDataSource } from "../../../shared/infra/typeorm";
import { Fornecedor } from "../entities/Fornecedor";
import { FindOptionsWhere, ILike, Repository } from "typeorm";
import { ICreateFornecedoresDTO } from "../dtos/ICreateFornecedorsDTO";
import { IFilterFornecedorDTO } from "../dtos/IFiltersFornecedorDTO";
import { IUpdateFornecedoresDTO } from "../dtos/IUpdateFornecedoresDTO";


export interface IFornecedorRepository{
    create(data: ICreateFornecedoresDTO): Promise<Fornecedor>;
    list(filters?: IFilterFornecedorDTO): Promise<Fornecedor[]>;
    findById(id: string): Promise<Fornecedor | null>;
    update(id: string, data: IUpdateFornecedoresDTO): Promise<void>;
    delete(id: string): Promise<void>;
    findByEmail(email: string): Promise<Fornecedor | null>
}

export class FornecedorRepository implements IFornecedorRepository{
    private repository: Repository<Fornecedor>


constructor(){
    this.repository = AppDataSource.getRepository(Fornecedor);
}

    async create(data: ICreateFornecedoresDTO): Promise<Fornecedor>{
        const fornecedor = this.repository.create(data);
        return await this.repository.save(fornecedor)
    }

    async list(filters?: IFilterFornecedorDTO): Promise<Fornecedor[]> {
        const where: FindOptionsWhere<Fornecedor> = {}

        if(filters?.nome){
            where.nome = ILike (`%${filters.nome}%`)
        }

        if(filters?.email){
            where.email = ILike (`%${filters.email}%`)
        }

        if(filters?.cnpj){
            where.cnpj = ILike (`%${filters.cnpj}%`)
        }

        if(filters?.telefone){
            where.telefone = ILike (`%${filters.telefone}%`)
        }

        return await this.repository.find({where})

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
 

async findByEmail(email: string): Promise<Fornecedor | null>{
    return await this.repository.findOne({
        where:{email}
    })
}

}

