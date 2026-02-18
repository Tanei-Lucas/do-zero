import { DataSource, DataSourceOptions } from 'typeorm';

const prefixFolder = 'src';


const entitiesFolder = `${prefixFolder}/**/entities/**/*{.ts,.js}`;
const migrationsFolder = `${prefixFolder}/shared/infra/typeorm/migrations/**/*{.ts,.js}`;

export const options: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST ?? "localhost",
  port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  username: process.env.DB_USER ?? "postgres",
  password: process.env.DB_PASS ?? "1234",
  database: process.env.DB_NAME ?? "products",
  logging: true, 
  entities: [entitiesFolder],
  migrations: [migrationsFolder],
};

export const AppDataSource = new DataSource(options);

AppDataSource.initialize()
  .then(() => console.info('🚀 Database Connected!'))
  .catch((err) => {
    console.error('⛔ Erro ao conectar no Banco de Dados', err);
  });