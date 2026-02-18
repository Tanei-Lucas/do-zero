import { ClienteRepository } from "../../repositories/ClienteRepository";

export class FindByClienteUseCase {
    async execute(id: number){
        const clienteRepository = new ClienteRepository();
        const product = await clienteRepository.findById(id)
        return product
    }

}