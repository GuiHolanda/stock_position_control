import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableProfitsAndLosses1717767312001
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE public.profits_and_losses (
            id SERIAL PRIMARY KEY,
            user_id integer NOT NULL,
            position_history_id integer NOT NULL,
            asset character varying NOT NULL,
            type character varying NOT NULL,
            market character varying NOT NULL,
            qtd integer NOT NULL,
            start_price double precision NOT NULL,
            end_price double precision NOT NULL,
            profit_or_loss double precision NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            FOREIGN KEY (user_id) REFERENCES public.users(id),
            FOREIGN KEY (position_history_id) REFERENCES public.position_history(id)
        );
  
        ALTER TABLE public.profits_and_losses ADD CONSTRAINT check_type CHECK (type IN ('compra', 'venda'));
  
        CREATE INDEX idx_profits_and_losses_type ON public.profits_and_losses(type);
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE public.profits_and_losses;
      `);
  }
}
