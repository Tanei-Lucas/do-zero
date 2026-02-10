import {Product} from "../entities/products";
import { ICreateProductDTO } from "../dtos/ICreateProductDTO";

export interface productsRepository {
    create(data: ICreateProductDTO): Promise<Product>;
    findByName(nome:string): Promise<Product | undefined>;
}


export class iProductsRepository implements productsRepository {
  private products: Product[] = [];

  async create({ nome, preco }: ICreateProductDTO): Promise<Product> {
    const product = new Product();

    Object.assign(product, {
      nome,
      preco,
      id: 1,
    });

    this.products.push(product);

    return product;
  }

  async findByName(nome: string): Promise<Product | undefined> {
    const product = this.products.find((p) => p.nome === nome);
    return product; }

  async list(): Promise<Product[]> {
    return this.products;
  }
}
  