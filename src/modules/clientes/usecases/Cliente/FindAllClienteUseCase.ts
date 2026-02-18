import { ICreateClienteDTO } from "../../../clientes/dtos/Cliente/ICreateClienteDTO";
import { ClienteRepository } from "../../repositories/ClienteRepository";
import { IFilterClienteDTO } from "../../../clientes/dtos/Cliente/IFilterClienteDTO";
import { IFilterAllClienteDTO } from "../../../clientes/dtos/Cliente/IFilterAllClienteDTO";

export class FindAllClienteUseCase{
    async execute ({nome}:IFilterAllClienteDTO){
        const clienteRepository = new ClienteRepository();
        const clienteList = await clienteRepository.findAll(nome);
return clienteList;
        
    }

}