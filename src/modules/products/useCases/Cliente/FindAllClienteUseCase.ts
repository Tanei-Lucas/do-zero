import { ICreateClienteDTO } from "../../dtos/Cliente/ICreateClienteDTO";
import { ClienteRepository } from "../../repositories/ClienteRepository";
import { IFilterClienteDTO } from "../../dtos/Cliente/IFilterClienteDTO";
import { IFilterAllClienteDTO } from "../../dtos/Cliente/IFilterAllClienteDTO";

export class FindAllClienteUseCase{
    async execute ({nome}:IFilterAllClienteDTO){
        const clienteRepository = new ClienteRepository();
        const clienteList = await clienteRepository.findAll(nome);
return clienteList;
        
    }

}