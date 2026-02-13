import {Product} from "../entities/Product";
import { ICreateProductDTO } from "../dtos/Product/ICreateProductDTO";
import { AppDataSource } from "../../../shared/infra/typeorm";
import { IFilterProductsDTO } from "../dtos/Product/IFilterProductsDTO";
import { IUpdateByProductDTO } from "../dtos/Product/IUpdateByProductDTO";

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

   async findAll({nome, preco}:IFilterProductsDTO):Promise<Product[]>{
    return await this.productRepository.find({
      where:{
        nome: nome,
        preco: preco,
      }
    })
  }

  async findById(id:number):Promise<Product | null>{
    return await this.productRepository.findOneBy({id});
  }

  async delete(id:number):Promise<void>{
    await this.productRepository.delete({id});
  }

  async update({id, nome, preco}:IUpdateByProductDTO):Promise<void>{
    await this.productRepository.update(id, { nome, preco});
    
  }
}

  