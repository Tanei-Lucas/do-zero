import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClienteTable1771505013745 implements MigrationInterface {
    name = 'CreateClienteTable1771505013745'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "clientes" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "telefone" character varying NOT NULL, "data_nascimento" TIMESTAMP NOT NULL, "status" boolean NOT NULL, "endereco" character varying NOT NULL, "numero" character varying NOT NULL, "compremento" character varying, "bairro" character varying NOT NULL, "cidade" character varying NOT NULL, "estado" character varying NOT NULL, CONSTRAINT "PK_d76bf3571d906e4e86470482c08" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "clientes"`);
    }

}
