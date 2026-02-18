import { CreateCategoriaUseCase } from "../useCases/Categorias/CreateCategoriasUseCase";
import { Request, Response } from "express";
import { ICreateCategoriaDTO } from "../dtos/categorias/ICreateCategoriasDTO";
import { FindAllCategoriaUseCase } from "../useCases/Categorias/FindAllCategoriaUseCase";
import { FindByIdCategoriaUseCase } from "../useCases/Categorias/FindByIdCategoriaUseCase";


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
}

