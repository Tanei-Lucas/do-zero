import { ClienteRepository } from "../../repositories/ClienteRepository";
import { ICreateClienteDTO } from "../../dtos/Cliente/ICreateClienteDTO";

export class CreateClienteUseCase {
    async execute(data: ICreateClienteDTO){
        const clienteRepository = new ClienteRepository();
        const productAlreadyExists = await clienteRepository.findByName(data.nome);
    
        if (productAlreadyExists) {
          throw new Error("Cliente já existe!");
        }
        
       const createdCliente = await clienteRepository.create(data);
       return createdCliente
      }
}