import { CategoriaRepository } from "../../repositories/CategoriaRepository";
import { ICreateCategoriaDTO } from "../../dtos/categorias/ICreateCategoriasDTO";

export class FindAllCategoriaUseCase{
    async execute(){
        const categoriaRepository = new CategoriaRepository()
        const categoriaList = await categoriaRepository.list()
        return categoriaList
    }
} 
