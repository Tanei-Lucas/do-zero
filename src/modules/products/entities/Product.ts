import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Fornecedor } from "../../Fornecedor/entities/Fornecedor";

@Entity("products")
export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column()
  nome: string;

  @Column("decimal")
  preco: number;

  @ManyToOne(() => Fornecedor,fornecedor => fornecedor.products)
  @JoinColumn({name:"fornecedor_id"})
  fornecedor:Fornecedor
}