import { CategoriaRepository } from "../../repositories/CategoriaRepository";
import { IUpdateCategoriaDTO } from "../../../categorias/dtos/categorias/IUpdateCategoriaDTO";

export class UpdateCategoriaUseCase{
    async execute(id: number, data: IUpdateCategoriaDTO){
        const categoriaRepository = new CategoriaRepository();
        const categoriaExists = await categoriaRepository.findById(id)

        if(!categoriaExists){
            throw new Error("Categoria não encontrada")
        }

        const categoriaNome = await categoriaRepository.findByNome(data.nome)

        if(categoriaNome && categoriaExists.id !== id) {
            throw new Error("Já existe uma categoria com este nome");
        }

        await categoriaRepository.update(id, data);
    }
}