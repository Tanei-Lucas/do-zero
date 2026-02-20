import { Categoria } from "../../categorias/entities/Categorias";
import { ICreateCategoriaDTO } from "../dtos/ICreateCategoriasDTO";
import { Repository } from "typeorm";
import { AppDataSource } from "../../../shared/infra/typeorm";
import { IUpdateCategoriaDTO } from "../dtos/IUpdateCategoriasDTO";


export interface ICategoriaRepository{
    create(data: ICreateCategoriaDTO): Promise<Categoria>;
    list(): Promise<Categoria[]>;
    findById(id: number): Promise<Categoria | null>;
    findByNome(nome: string): Promise<Categoria | null>;
    delete(id: number): Promise<void>;
}

export class CategoriaRepository implements ICategoriaRepository {
    private repository: Repository<Categoria>;

    constructor() {
        this.repository = AppDataSource.getRepository(Categoria);
    }

    async create(data: ICreateCategoriaDTO): Promise<Categoria> {

        const categoria = this.repository.create(data);

         return await this.repository.save(categoria);
    }

    async list(): Promise<Categoria[]> {

        return await this.repository.find();
    }

    async findById(id: number): Promise<Categoria | null> {

        return await this.repository.findOneBy({ id });
    }

    async findByNome(nome: string): Promise<Categoria | null> {
       
        return await this.repository.findOneBy({ nome });
    }

    async update(id: number, data:IUpdateCategoriaDTO):Promise<void>{
        await this.repository.update(id, data);
    
    }


    async delete(id: number): Promise<void> {

        await this.repository.delete(id);
    }
}
