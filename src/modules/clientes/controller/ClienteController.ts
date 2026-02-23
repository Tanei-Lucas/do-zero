import { Request, Response } from "express";
import { CreateClienteUseCase } from "../usecases/CreateClienteUseCase";
import { FindAllClienteUseCase } from "../usecases/FindAllClienteUseCase";
import { DeleteClienteByIdUseCase } from "../usecases/DeleteClienteUseCase";
import { UpdateClienteUseCase } from "../usecases/UpdateClienteUseCase";
import { FindByIdClienteUseCase } from "../usecases/FindByIdClienteUseCase";
import { IFindAllClienteDTO } from "../dtos/IFindAllClienteDTO";

export class ClienteController { 

    async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createClienteUseCase = new CreateClienteUseCase();

        const createdCliente = await createClienteUseCase.execute(data);

        return response.status(201).json(createdCliente);
    }

    async findAll(request: Request, response: Response): Promise<Response> {

        const data = request.query as unknown as IFindAllClienteDTO 

        const findAllCienteUseCase = new FindAllClienteUseCase()
        
        const ClienteAll = await findAllCienteUseCase.execute(data);

        return response.status(200).json(ClienteAll);
    }
    
    async findById(request: Request, response: Response): Promise<Response> {
    
            const {id} = request.params 
    
            const  findByIdClienteUseCase = new FindByIdClienteUseCase()
    
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