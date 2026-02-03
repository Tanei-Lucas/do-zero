import { IproductsRepository } from "../repositories/IproductsRepository";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";

export class CreateProductUseCase {
  constructor(private productsRepository: IproductsRepository) {}

  async execute({ nome, preco }: ICreateProductDTO): Promise<void> {
    const productAlreadyExists = await this.productsRepository.findByName(nome);

    if (productAlreadyExists) {
      throw new Error("Product already exists!");
    }

    await this.productsRepository.create({ nome, preco });
  }
}