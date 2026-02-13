import { Cliente } from "../entities/Cliente";
import { ICreateClienteDTO } from "../dtos/Cliente/ICreateClienteDTO";
import { AppDataSource } from "../../../shared/infra/typeorm";

export interface IClienteRepository{
    create(data: ICreateClienteDTO): Promise<Cliente>;
}

export class ClienteRepository implements IClienteRepository {
  private readonly clienteRepository = AppDataSource.getRepository(Cliente)
  async create(data: ICreateClienteDTO): Promise<Cliente> {
    const createdClientes = this.clienteRepository.create(data)
    return await this.clienteRepository.save(createdClientes)
}



}