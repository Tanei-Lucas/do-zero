import { ProductRepository } from "../repositories/ProductRepository";
import { IFilterProductsDTO } from "../dtos/IFilterProductsDTO";

export class FindAllProductUseCase{
    async execute ({ nome, preco }: IFilterProductsDTO ){
        const productRepository = new ProductRepository;
        const productList = await productRepository.findAll({nome, preco});
return productList;
        
    }

}
