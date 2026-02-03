import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("produtos")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column("decimal")
  preco: number;
}