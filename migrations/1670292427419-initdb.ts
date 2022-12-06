import { MigrationInterface, QueryRunner } from "typeorm";

export class initdb1670292427419 implements MigrationInterface {
    name = 'initdb1670292427419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product_detail" ("id" SERIAL NOT NULL, "country" character varying NOT NULL, "Color" character varying NOT NULL, CONSTRAINT "PK_12ea67a439667df5593ff68fc33" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "categoriesId" integer, "detailId" integer, CONSTRAINT "REL_4d11d0b8bb5fc7c620f1142c8c" UNIQUE ("detailId"), CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_b31522e7a7f93ef47f311590a79" FOREIGN KEY ("categoriesId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_4d11d0b8bb5fc7c620f1142c8ca" FOREIGN KEY ("detailId") REFERENCES "product_detail"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_4d11d0b8bb5fc7c620f1142c8ca"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_b31522e7a7f93ef47f311590a79"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "product_detail"`);
    }

}
