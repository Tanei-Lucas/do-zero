import { Request, Response } from "express";
import { CreateClienteUseCase } from "../usecases/Cliente/CreateClienteUseCase";
import { FindAllClienteUseCase } from "../usecases/Cliente/FindAllClienteUseCase";
import { FindByIdProductUseCase } from "../../products/useCases/Product/FindByIdProductUseCase";
import { DeleteClienteByIdUseCase } from "../usecases/Cliente/DeleteClienteUseCase";
import { UpdateClienteUseCase } from "../usecases/Cliente/UpdateClienteUseCase";
import { IFilterClienteDTO } from "../dtos/Cliente/IFilterClienteDTO";
import { ICreateClienteDTO } from "../dtos/Cliente/ICreateClienteDTO";
import { FindByIdClienteUseCase } from "../usecases/Cliente/FindByIdClienteUseCase";


export class ClienteController { 

    async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createClienteUseCase = new CreateClienteUseCase();

        const createdCliente = await createClienteUseCase.execute(data);

        return response.status(201).json(createdCliente);
    }

    async findAll(request: Request, response: Response): Promise<Response> {

        const data = request.query as unknown as ICreateClienteDTO

        const findAllCienteUseCase = new FindAllClienteUseCase()
        
        const findClienteAll = await findAllCienteUseCase.execute(data);

        return response.status(200).json(findClienteAll);
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