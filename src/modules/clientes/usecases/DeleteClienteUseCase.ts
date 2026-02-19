import { ClienteRepository } from "../repositories/ClienteRepository"

export class DeleteClienteByIdUseCase {
    async execute(id: number){
    const clienteRepository = new ClienteRepository
    await clienteRepository.delete(id)
    }
}