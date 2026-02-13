import { Request, Response } from "express";
import { CreateClienteUseCase } from "../useCases/Cliente/CreateClienteUseCase";



export class ClienteController {
    async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createClienteUseCase = new CreateClienteUseCase();

        const createdCliente = await createClienteUseCase.execute(data);

        return response.status(201).json(createdCliente);
    }
}