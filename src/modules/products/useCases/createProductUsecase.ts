import { ProductRepository } from "../repositories/ProductRepository";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";

export class CreateProductUseCase {
  constructor() {}

  async execute({ nome, preco }: ICreateProductDTO): Promise<void> {
    const productRepository = new ProductRepository()
    const productAlreadyExists = await productRepository.findByName(nome);

    if (productAlreadyExists) {
      throw new Error("Product already exists!");
    }
    
   await productRepository.create({ nome, preco });
  }
}