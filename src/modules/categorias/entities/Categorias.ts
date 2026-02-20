import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";

@Entity("categorias")
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    nome: string;

    @Column()
    descricao: string;

    @Column()
    ativo: boolean;

}