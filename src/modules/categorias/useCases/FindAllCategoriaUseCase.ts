import { CategoriaRepository } from "../repositories/CategoriaRepository";

export class FindAllCategoriaUseCase{
    async execute(){
        const categoriaRepository = new CategoriaRepository()
        const categoriaList = await categoriaRepository.list()
        return categoriaList
    }
} 
