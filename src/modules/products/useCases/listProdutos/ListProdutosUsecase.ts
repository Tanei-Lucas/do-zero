import {  iProductsRepository } from "../../repositories/ProductRepository";
import { Product } from "../../entities/products";

export class ListProductsUseCase {
  constructor(private productsRepository: iProductsRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.list();

    return products;
  }
}