import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertGuilhermeInUser1716655632492 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        INSERT INTO public."users"(
            name, email, role, password)
            VALUES ('guilherme holanda', 'gholanda04@gmail.com', 'admin', '$2b$10$fICW2ycLfgxv5zVcyp7EquYS1HNXEEyhJrZHbLYXv2PW.GBGejXvG');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        DELETE FROM public."user"
            WHERE email like 'gholanda04@gmail.com';
    `);
  }
}
