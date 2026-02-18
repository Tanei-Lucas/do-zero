import { CreateCategoriaUseCase } from "../usecases/Categorias/CreateCategoriasUseCase";
import { Request, Response } from "express";
import { ICreateCategoriaDTO } from "../dtos/categorias/ICreateCategoriasDTO";
import { FindAllCategoriaUseCase } from "../usecases/Categorias/FindAllCategoriaUseCase";
import { FindByIdCategoriaUseCase } from "../usecases/Categorias/FindByIdCategoriaUseCase";
import { UpdateByProductUseCase } from "../../products/useCases/Product/UpdateByProductUseCase";
import { DeleteCategoriaUseCase } from "../usecases/Categorias/DeleteCategoriasUseCase";


export class CategoriaController{

    async create(request: Request, response: Response){

        const data = request.body;

        const createCategoriasUseCase = new CreateCategoriaUseCase();

        const createdCategoria = createCategoriasUseCase.execute(data);

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

        const findIdCategoria = await findByIdCategoriaUseCase.execute(Number(id));

        return response.status(204).json(findIdCategoria); 
    }

    async update(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const data = request.body
        const updateCategoriaUseCase = new  UpdateByProductUseCase()
        await updateCategoriaUseCase.execute({id: Number(id), ...data}) 
        return response.status(204).send()
    }

    async delete(request: Request, response: Response): Promise<Response>{
        const {id} = request.params
        const deleteCategoriaUseCase = new DeleteCategoriaUseCase()
        await deleteCategoriaUseCase.execute(Number(id))
        return response.status(204).json()
    }
}

