import { ProductRepository } from "../../repositories/ProductRepository"

export class DeleteProductByIdUseCase {
    async execute(id: number){
    const productRepository = new ProductRepository
    await productRepository.delete(id)
    }
}