import { MigrationInterface, QueryRunner } from "typeorm";

export class CreteProductTable1770834250712 implements MigrationInterface {
    name = 'CreteProductTable1770834250712'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "products" ("id" SERIAL NOT NULL, "nome" character varying NOT NULL, "preco" numeric NOT NULL, CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "products"`);
    }

}
