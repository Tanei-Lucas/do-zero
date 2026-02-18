
import { ClienteRepository } from "../../repositories/ClienteRepository";
import { ICreateClienteDTO } from "../../dtos/Cliente/ICreateClienteDTO";

export class FindAllClienteUseCase{
    async execute (data: ICreateClienteDTO){
        const clienteRepository = new ClienteRepository();
        const clienteList = await clienteRepository.findAll(data);
return clienteList;
        
    }

}