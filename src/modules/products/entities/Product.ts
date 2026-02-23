import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Fornecedor } from "../../Fornecedor/entities/fornecedor";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column("decimal")
  preco: number;

  @ManyToOne(() => Fornecedor,fornecedor => fornecedor.products)
  @JoinColumn({name:"forncedor_id"})
  fornecedor:Fornecedor
}