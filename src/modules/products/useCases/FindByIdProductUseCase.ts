import { ProductRepository } from "../repositories/ProductRepository";

export class FindByIdProductUseCase {
    async execute(id: number){
        const productRepository = new ProductRepository;
        const product = await productRepository.findById(id)
        return product
    }

}