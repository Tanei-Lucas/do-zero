import {Product} from "../entities/Product";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { AppDataSource } from "../../../shared/infra/typeorm";

export interface IProductRepository {
    create(data: ICreateProductDTO): Promise<Product>;
}


export class ProductRepository implements IProductRepository {
  private readonly productRepository = AppDataSource.getRepository(Product)
  async create(data: ICreateProductDTO): Promise<Product> {
    const createdProduct = this.productRepository.create(data)
    return await this.productRepository.save(createdProduct)
  }
  

   async findByName(nome: string): Promise<Product | null> {
    const product = await this.productRepository.findOneBy({nome});
    return product;
  }
}

  