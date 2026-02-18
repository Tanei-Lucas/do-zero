import { ClienteRepository } from "../../repositories/ClienteRepository";
import { UpdateClienteDTO } from "../../dtos/Cliente/UpdateClienteDTO";
import { removeSpecialChars } from "../../../../shared/utils/removeSpecialChars";
import { isValid, parseISO } from "date-fns";

export class UpdateClienteUseCase {
  async execute(data: UpdateClienteDTO) {

    // 1. Criamos o repositório
    const clienteRepository = new ClienteRepository();

    // 2. Buscamos o cliente pelo ID
    const cliente = await clienteRepository.findById(data.id);

    // 3. Se não existir, erro
    if (!cliente) {
      throw new Error("Cliente não encontrado!");
    }

    // =============================
    // 4. VALIDAÇÃO DE CPF (SÓ SE VEIO)
    // =============================

    if (data.cpf) {

      // 4.1 Limpamos o CPF
      const cpfLimpo = removeSpecialChars(data.cpf);

      // 4.2 Validamos tamanho
      if (cpfLimpo.length !== 11) {
        throw new Error("CPF deve conter exatamente 11 números!");
      }

      // 4.3 Buscamos se já existe outro cliente com esse CPF
      const clienteComMesmoCpf =
        await clienteRepository.findByCpf(cpfLimpo);

      // 4.4 Se achou outro cliente com mesmo CPF, bloqueia
      if (
        clienteComMesmoCpf &&
        clienteComMesmoCpf.id !== data.id
      ) {
        throw new Error("Este CPF já pertence a outro cliente!");
      }

      // 4.5 Atualizamos o CPF já limpo
      data.cpf = cpfLimpo;
    }

    // =============================
    // 5. VALIDAÇÃO DE DATA (SE VEIO)
    // =============================

    if (data.data_nascimento) {
      const dataObjeto = parseISO(
        String(data.data_nascimento)
      );

      if (!isValid(dataObjeto)) {
        throw new Error("Data de nascimento inválida!");
      }
    }

    // 6. Atualizamos o cliente
    await clienteRepository.update(data);
  }
}
