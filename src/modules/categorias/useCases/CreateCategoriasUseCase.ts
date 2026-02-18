import { CategoriaRepository } from "../repositories/CategoriaRepository";
import { ICreateCategoriaDTO } from "../dtos/categorias/ICreateCategoriasDTO";
import { Categoria } from "../entities/Categorias";

export class CreateCategoriaUseCase{
    async execute(data: ICreateCategoriaDTO): Promise<Categoria | void>{
        const categoriaRepository = new CategoriaRepository()
        const categoriaAlreadyExists = await categoriaRepository.findByNome(data.nome)

        if(categoriaAlreadyExists){
            throw new Error("Categoria já existe");
        }
         
        return await categoriaRepository.create(data)

    }

    }
