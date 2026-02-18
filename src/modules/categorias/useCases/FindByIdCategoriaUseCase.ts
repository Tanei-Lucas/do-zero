import { CategoriaRepository } from "../repositories/CategoriaRepository"

export class FindByIdCategoriaUseCase{
    async execute(id: number){
        const categoriaRepository = new CategoriaRepository()
        const categoria = categoriaRepository.findById(id)
        return categoria
    }
}