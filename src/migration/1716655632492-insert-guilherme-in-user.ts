import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertGuilhermeInUser1716655632492 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO public."user"(
            name, email, role, password)
            VALUES ('guilherme holanda', 'gholanda04@gmail.com', 2, '$2b$10$BhaMKrzUdPJFaHLcdvls7.lFMHojH9/sG/jwrp.Is0YXIlpBe4gI.');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM public."user"
            WHERE email like 'gholanda04@gmail.com';
    `);
  }
}
