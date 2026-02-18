import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity ("clientes")

export class Cliente{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    cpf: string;

    @Column()
    telefone: string;

    @Column()
    data_nascimento: Date;

    @Column()
    status: boolean;

    @Column()
    endereco: string;

    @Column()   
    numero: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;
}