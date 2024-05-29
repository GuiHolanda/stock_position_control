import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableUser1716655294328 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE public.users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            role VARCHAR(50) NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL
        );

        ALTER TABLE public.users ADD CONSTRAINT check_role CHECK (role IN ('admin', 'user'));

        CREATE INDEX idx_users_role ON public.users(role);

        COMMENT ON TABLE public.users IS 'Table containing user data';
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE IF EXISTS public.users;
    `);
  }
}
