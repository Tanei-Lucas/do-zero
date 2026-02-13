export interface ICreateClienteDTO {
    id: number;

    nome: string;

    email: string;

    cpf: string;

    telefone: string;

    data_nascimento: Date;

    status: boolean;

    endereco: string;

    numero: string;

    bairro: string;

    cidade: string;

    estado: string;
}