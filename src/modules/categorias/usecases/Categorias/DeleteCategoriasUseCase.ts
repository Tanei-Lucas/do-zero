import { CategoriaRepository } from "../../repositories/CategoriaRepository";

export class DeleteCategoriaUseCase{
    async execute(id: number){
        const categoriaRepository = new CategoriaRepository();
        const categoriaexists = await categoriaRepository.findById(id)

        if(!categoriaexists){
            throw new Error("Categoria não existe")
        }

        await categoriaRepository.delete(id)

    }
}