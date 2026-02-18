import { ClienteRepository } from "../../repositories/ClienteRepository";
import { ICreateClienteDTO } from "../../dtos/Cliente/ICreateClienteDTO";
import { Cliente } from "../../entities/Cliente";
import { removeSpecialChars } from "../../../../shared/utils/removeSpecialChars";
import {isValid} from "date-fns";

export class CreateClienteUseCase {
    async execute(data: ICreateClienteDTO): Promise<Cliente>{
        const clienteRepository = new ClienteRepository();

        const countByNome = await clienteRepository.countByFilters({
          nome: data.nome,
        });
        if (countByNome !== 0) {
          throw new Error("Cliente já existe!");
        }

         const countByEmail = await clienteRepository.countByFilters({
          email: data.email,
        });
        if(countByEmail !== 0){
           throw new Error("Email já existe!");
        }

         const countByCpf = await clienteRepository.countByFilters({
          cpf: data.cpf,
        });

        if(countByCpf !== 0){
           throw new Error("Cpf já existe!");
        }
        const cpfWithoutSpecialChars = removeSpecialChars(data.cpf)
        if(cpfWithoutSpecialChars.length !== 11){
           throw new Error("Cpf deve conter 11 numeros!");
        }

        if(!isValid(data.data_nascimento)) {
        throw new Error("Data de nascimento inválida!");
}
        
       const createdCliente = await clienteRepository.create({
      ...data,
      status: true
      });

       return createdCliente
      }
 
}