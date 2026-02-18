import { CategoriaRepository } from "../../repositories/CategoriaRepository";
import { IFindByCategoriaDTO } from "../../dtos/categorias/IFindByIdCategoriaDTO";

export class FindByIdCategoriaUseCase{
    async execute(id: number){
        const categoriaRepository = new CategoriaRepository()
        const categoria = categoriaRepository.findById(id)
        return categoria
    }
}