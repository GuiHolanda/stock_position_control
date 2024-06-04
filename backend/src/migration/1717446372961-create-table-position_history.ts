import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePositionHistory1717446372961
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE public.position_history (
            id SERIAL PRIMARY KEY,
            user_id integer NOT NULL,
            current_position_id integer NOT NULL,
            asset character varying NOT NULL,
            type character varying NOT NULL,
            market character varying NOT NULL,
            qtd integer NOT NULL,
            price double precision NOT NULL,
            value double precision NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            FOREIGN KEY (user_id) REFERENCES public.users(id)
        );
  
        ALTER TABLE public.position_history ADD CONSTRAINT check_type CHECK (type IN ('compra', 'venda'));
  
        CREATE INDEX idx_position_history_type ON public.position_history(type);
      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE public.position_history;
      `);
  }
}
