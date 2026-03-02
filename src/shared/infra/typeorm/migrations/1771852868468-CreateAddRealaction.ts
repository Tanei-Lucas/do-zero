import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAddRealaction1771852868468 implements MigrationInterface {
    name = 'CreateAddRealaction1771852868468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" ADD "forncedor_id" uuid`);
        await queryRunner.query(`ALTER TABLE "products" ADD CONSTRAINT "FK_b71fcc8bbc2f5b8b3bf8588611f" FOREIGN KEY ("forncedor_id") REFERENCES "fornecedores"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "products" DROP CONSTRAINT "FK_b71fcc8bbc2f5b8b3bf8588611f"`);
        await queryRunner.query(`ALTER TABLE "products" DROP COLUMN "forncedor_id"`);
    }

}
