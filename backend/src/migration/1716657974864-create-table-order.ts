import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableOrder1716657974864 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE public.orders (
          id SERIAL PRIMARY KEY,
          user_id integer NOT NULL,
          position_id integer NOT NULL,
          asset character varying NOT NULL,
          market character varying NOT NULL,
          type character varying NOT NULL,
          qtd integer NOT NULL,
          price double precision NOT NULL,
          value double precision NOT NULL,
          created_at timestamp without time zone DEFAULT now() NOT NULL,
          updated_at timestamp without time zone DEFAULT now() NOT NULL,
          FOREIGN KEY (user_id) REFERENCES public.users(id),
          FOREIGN KEY (position_id) REFERENCES public.positions(id)
      );

      ALTER TABLE public.orders ADD CONSTRAINT check_type CHECK (type IN ('compra', 'venda'));

      CREATE INDEX idx_orders_type ON public.orders(type);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DROP TABLE public.orders;
    `);
  }
}
