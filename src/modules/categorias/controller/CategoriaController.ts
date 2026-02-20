import { CreateCategoriaUseCase } from "../useCases/CreateCategoriasUseCase";
import { Request, Response } from "express";
import { FindAllCategoriaUseCase } from "../useCases/FindAllCategoriaUseCase";
import { FindByIdCategoriaUseCase } from "../useCases/FindByIdCategoriaUseCase";
import { DeleteCategoriaUseCase } from "../useCases/DeleteCategoriasUseCase";
import { UpdateCategoriaUseCase } from "../useCases/UpdateCategoriaUseCase";

export class CategoriaController{

    async create(request: Request, response: Response){
        
        const data = request.body;

        const createCategoriasUseCase = new CreateCategoriaUseCase();

        const createdCategoria = await createCategoriasUseCase.execute(data);

        return response.status(201).json(createdCategoria)
    }

    async list(request: Request, response: Response): Promise<Response>{

        const findAllCategoriaUseCase = new FindAllCategoriaUseCase();

        const findCategoria = await findAllCategoriaUseCase.execute()

        return response.status(200).json(findCategoria)

    }

    async findById(request: Request, response: Response): Promise<Response>{

        const {id} = request.params;

        const findByIdCategoriaUseCase = new FindByIdCategoriaUseCase();

        const categoria = await findByIdCategoriaUseCase.execute(Number(id));

        return response.status(200).json(categoria); 
    }

    async update(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const data = request.body
        const updateCategoriaUseCase = new  UpdateCategoriaUseCase()
        await updateCategoriaUseCase.execute(Number(id), data) 
        return response.status(204).send()
    }

    async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const deleteCategoriaUseCase = new DeleteCategoriaUseCase()
        await deleteCategoriaUseCase.execute(Number(id))
        return response.status(204).json()
    }
}

