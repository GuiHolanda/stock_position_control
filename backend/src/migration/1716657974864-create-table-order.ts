import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTableOrder1716657974864 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        CREATE TABLE public.order (
            id integer NOT NULL,
            user_id integer NOT NULL,
            position_id integer NOT NULL,
            asset character varying NOT NULL,
            type character varying NOT NULL,
            qtd integer NOT NULL,
            price integer NOT NULL,
            value integer NOT NULL,
            created_at timestamp without time zone DEFAULT now() NOT NULL,
            updated_at timestamp without time zone DEFAULT now() NOT NULL,
            primary key (id),
            foreign key (user_id) references public.user(id),
            foreign key (position_id) references public.position(id)
        );
        
        CREATE SEQUENCE public.order_id_seq
            AS integer
            START WITH 1
            INCREMENT BY 1
            NO MINVALUE
            NO MAXVALUE
            CACHE 1;
            
        ALTER SEQUENCE public.order_id_seq OWNED BY public.order.id;
        
        ALTER TABLE ONLY public.order ALTER COLUMN id SET DEFAULT nextval('public.order_id_seq'::regclass);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`
        drop table public.order;
    `);
  }
}
