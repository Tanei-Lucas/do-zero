
import { ClienteRepository } from "../../repositories/ClienteRepository";
import { IFilterAllClienteDTO } from "../../dtos/IFindAllClienteDTO";

export class FindAllClienteUseCase{
    async execute (data: IFilterAllClienteDTO ){
        const clienteRepository = new ClienteRepository();
        const clienteList = await clienteRepository.findAll(data);
return clienteList;
        
    }

}