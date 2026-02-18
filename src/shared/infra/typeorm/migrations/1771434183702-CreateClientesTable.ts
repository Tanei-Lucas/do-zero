import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateClientesTable1771434183702 implements MigrationInterface {
    name = 'CreateClientesTable1771434183702'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categorias" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "descricao" character varying NOT NULL, "ativo" boolean NOT NULL, CONSTRAINT "PK_3886a26251605c571c6b4f861fe" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "clientes" ADD "compremento" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clientes" DROP COLUMN "compremento"`);
        await queryRunner.query(`DROP TABLE "categorias"`);
    }

}
