import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateFornecedoresTable1771519079679 implements MigrationInterface {
    name = 'CreateFornecedoresTable1771519079679'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Fornecedores" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, "cnpj" character varying NOT NULL, "email" character varying NOT NULL, "telefone" character varying NOT NULL, "ativo" boolean NOT NULL, CONSTRAINT "PK_3e6ec58ae84bfde644d29d5162a" PRIMARY KEY ("id"))`);

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
        await queryRunner.query(`DROP TABLE "Fornecedores"`);
    }

}
