
import { IUpdateFornecedoresDTO } from "../dtos/IUpdateFornecedoresDTO";
import { IUpdateByProductDTO } from "../../products/dtos/IUpdateByProductDTO";

export interface IUpdateFornecedorComProdutoDTO {
    fornecedor?: IUpdateFornecedoresDTO;  
    produto?: IUpdateByProductDTO;        
}

import { ProductRepository } from "../../products/repositories/ProductRepository";
import { FornecedorRepository } from "../../Fornecedor/repositories/FornecedoresRepository";


export class UpdateFornecedorEProdutoUseCase {
    async execute(
        fornecedorId: string,  produtoId: number, data: IUpdateFornecedorComProdutoDTO) {
        const productRepo = new ProductRepository();
        const fornecedorRepo = new FornecedorRepository();

        const fornecedor = await fornecedorRepo.findById(fornecedorId);
        if (!fornecedor) {
            throw new Error("Fornecedor não encontrado");
        }

        const produto = await productRepo.findById(produtoId);
        if (!produto) {
            throw new Error("Produto não encontrado");
        }

        if (produto.fornecedor?.id !== fornecedorId) {
            throw new Error("Este produto não pertence a este fornecedor");
        }

        if (data.fornecedor) {
            await fornecedorRepo.update(Number(fornecedorId), data.fornecedor);
        }

        if (data.produto) {
            await productRepo.update(data.produto);
        }

        return {
            fornecedor: await fornecedorRepo.findById(fornecedorId),
            produto: await productRepo.findById(produtoId)
        };
    }
}