import { ProductRepository } from "../repositories/ProductRepository";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
export class CreateProductUseCase {
  constructor() {}

  async execute({ nome, preco, fornecedorId }: ICreateProductDTO){
    const productRepository = new ProductRepository()
    const productAlreadyExists = await productRepository.findByName(nome);

    if (productAlreadyExists) {
      throw new Error("Produto já existe!");
    }
    
   const createdProduct = await productRepository.create({ nome, preco, fornecedorId });
   return createdProduct
  }
  
}