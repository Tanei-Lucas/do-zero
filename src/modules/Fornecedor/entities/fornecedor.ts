import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "../../products/entities/Product";

@Entity ("fornecedores")

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

    
    @OneToMany(() => Product, product => product.fornecedor)
    products?: Product[]

}
