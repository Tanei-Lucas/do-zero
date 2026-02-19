import { AppDataSource } from "../../../shared/infra/typeorm";
import { Fornecedor } from "../entities/fornecedor";
import { ILike, Repository } from "typeorm";
import { ICreateFornecedoresDTO } from "../dtos/ICreateFornecedorsDTO";

export interface IFornecedorRepository{
    create(data: ICreateFornecedoresDTO): Promise<Fornecedor>;
    list(filters?: any): Promise<Fornecedor>;
}
