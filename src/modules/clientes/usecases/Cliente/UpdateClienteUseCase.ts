import { ClienteRepository } from "../../repositories/ClienteRepository";
import { IUpdateClienteDTO } from "../../dtos/Cliente/IUpdateClienteDTO"
import { removeSpecialChars } from "../../../../shared/utils/removeSpecialChars";
import { isValid, parseISO } from "date-fns";

export class UpdateClienteUseCase {
  async execute(data: IUpdateClienteDTO) {

    const clienteRepository = new ClienteRepository();

    const cliente = await clienteRepository.findById(data.id);

    if (!cliente) {
      throw new Error("Cliente não encontrado!");
    }

    if (data.cpf) {

      const cpfLimpo = removeSpecialChars(data.cpf);

      if (cpfLimpo.length !== 11) {
        throw new Error("CPF deve conter exatamente 11 números!");
      }

      const clienteComMesmoCpf =
        await clienteRepository.findByCpf(cpfLimpo);

      if (
        clienteComMesmoCpf &&
        clienteComMesmoCpf.id !== data.id
      ) {
        throw new Error("Este CPF já pertence a outro cliente!");
      }

      data.cpf = cpfLimpo;
    }

    if (data.data_nascimento) {
      const dataObjeto = parseISO(
        String(data.data_nascimento)
      );

      if (!isValid(dataObjeto)) {
        throw new Error("Data de nascimento inválida!");
      }
    }

    await clienteRepository.update(data);
  }
}
