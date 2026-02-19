import { Cliente } from "../../clientes/entities/Cliente";
import { ICreateClienteDTO } from "../dtos/ICreateClienteDTO";
import { AppDataSource } from "../../../shared/infra/typeorm";
import { IUpdateClienteDTO } from "../dtos/IUpdateClienteDTO";
import { IFilterClienteDTO } from "../dtos/IFilterClienteDTO";
import { IFindAllClienteDTO } from "../dtos/IFindAllClienteDTO";

export interface IClienteRepository {
  create(data: ICreateClienteDTO): Promise<Cliente>;
}

export class ClienteRepository implements IClienteRepository {
  private readonly clienteRepository =
    AppDataSource.getRepository(Cliente);

  async create(data: ICreateClienteDTO): Promise<Cliente> {
    const cliente = this.clienteRepository.create(data);
    return await this.clienteRepository.save(cliente);
  }

  async findById(id: number): Promise<Cliente | null> {
    return await this.clienteRepository.findOneBy({ id });
  }

  async countByFilters(data: IFilterClienteDTO) :Promise<number> {
  const count = await this.clienteRepository.count({
    where:{
      nome: data.nome,
      email: data.email,
      cpf: data.cpf
    }
  })
  return count
}


  async findByCpf(cpf: string): Promise<Cliente | null> {
    return await this.clienteRepository.findOne({
      where: { cpf }
    });
  }

  async findAll(data: IFindAllClienteDTO ): Promise<Cliente[]> {
    return await this.clienteRepository.find({
      where:data
    })
  }

  async delete(id: number): Promise<void> {
    await this.clienteRepository.delete({ id });
  }

  async update(data: IUpdateClienteDTO): Promise<void> {
    await this.clienteRepository.update(data.id, data);
  }
}

