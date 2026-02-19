
import { ClienteRepository } from "../repositories/ClienteRepository";
import { IFindAllClienteDTO } from "../dtos/IFindAllClienteDTO";

export class FindAllClienteUseCase{
    async execute (data: IFindAllClienteDTO ){
        const clienteRepository = new ClienteRepository();
        const clienteList = await clienteRepository.findAll(data);
return clienteList;
        
    }

}