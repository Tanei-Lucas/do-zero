import { Request, Response } from "express";
import { CreateClienteUseCase } from "../useCases/Cliente/CreateClienteUseCase";
import { FindAllClienteUseCase } from "../useCases/Cliente/FindAllClienteUseCase";
import { IFilterClienteDTO } from "../dtos/Cliente/IFilterClienteDTO";
import { FindByIdProductUseCase } from "../useCases/Product/FindByIdProductUseCase";
import { DeleteClienteByIdUseCase } from "../useCases/Cliente/DeleteClienteUseCase";
import { UpdateClienteUseCase } from "../useCases/Cliente/UpdateClienteUseCase";
import { IFilterAllClienteDTO } from "../dtos/Cliente/IFilterAllClienteDTO";


export class ClienteController {
    async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createClienteUseCase = new CreateClienteUseCase();

        const createdCliente = await createClienteUseCase.execute(data);

        return response.status(201).json(createdCliente);
    }

    async findAll(request: Request, response: Response): Promise<Response> {

        const {nome} = request.query as unknown as IFilterAllClienteDTO

        const findAllCienteUseCase = new FindAllClienteUseCase
        
        const findClienteAll = await findAllCienteUseCase.execute({nome})

        return response.status(200).json(findClienteAll);
    }
    
    async findById(request: Request, response: Response): Promise<Response> {
    
            const {id} = request.params 
    
            const  findByIdClienteUseCase = new FindByIdProductUseCase ()
    
            const product = await findByIdClienteUseCase.execute(Number(id));
            
            return response.status(200).json(product);
        }

    async delete(request: Request, response: Response): Promise<Response> {
        const {id} = request.params
        const deleteClienteByIdUseCase = new DeleteClienteByIdUseCase
        await deleteClienteByIdUseCase.execute(Number(id))
        return response.status(204).json()

    }   

    async update(request: Request, response: Response): Promise<Response>{
        const {id} = request.params 
        const data = request.body;
        const updateClienteUseCase = new UpdateClienteUseCase ()
        await updateClienteUseCase.execute({id: Number(id), ...data})
        return response.status(204).send()
    }
    
}