import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity ("Fornecedores")

export class Fornecedor{

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    nome: string;

    @Column()
    cnpj: string

    @Column()
    email: string

    @Column()
    telefone: string

    @Column()
    ativo: boolean
}
