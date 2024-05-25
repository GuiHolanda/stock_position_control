import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTablePosition1716657090180 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
            CREATE TABLE public.position (
                id integer NOT NULL,
                user_id integer NOT NULL,
                asset character varying NOT NULL,
                type character varying NOT NULL,
                status character varying NOT NULL,
                qtd integer NOT NULL,
                price integer NOT NULL,
                value integer NOT NULL,
                created_at timestamp without time zone DEFAULT now() NOT NULL,
                updated_at timestamp without time zone DEFAULT now() NOT NULL,
                closed_at timestamp without time zone DEFAULT now(),
                primary key (id),
                foreign key (user_id) references public.user(id)
            );
            
            CREATE SEQUENCE public.position_id_seq
                AS integer
                START WITH 1
                INCREMENT BY 1
                NO MINVALUE
                NO MAXVALUE
                CACHE 1;
                
            ALTER SEQUENCE public.position_id_seq OWNED BY public.position.id;
            
            ALTER TABLE ONLY public.position ALTER COLUMN id SET DEFAULT nextval('public.position_id_seq'::regclass);
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table public.position;
    `);
  }
}
