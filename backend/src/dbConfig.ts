import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Usuario } from '../src/usuario/usuario.entity';
config();

export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
});