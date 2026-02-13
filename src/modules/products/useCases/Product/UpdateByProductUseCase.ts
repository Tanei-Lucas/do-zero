import { ProductRepository } from "../../repositories/ProductRepository";
import { IUpdateByProductDTO } from "../../dtos/Product/IUpdateByProductDTO"

export class UpdateByProductUseCase {
    async execute({ id, nome, preco }: IUpdateByProductDTO) {
        const productRepository = new ProductRepository();
        const update = await productRepository.findById(Number(id))

        if (update) {
            return await productRepository.update({ id, nome, preco })
        }
        throw new Error("Produto não existe")
    }
}