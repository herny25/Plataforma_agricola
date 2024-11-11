import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { Notificacion } from './notificacion/entities/notificacion.entity';
import { Producto } from './producto/entities/producto.entity';
import { Publicacion } from './publicacion/entities/publicacion.entity';
import { Usuario } from './usuario/entities/usuario.entity';
import { Valoracion } from './valoracion/entities/valoracion.entity';
config();

export const dbConfig = TypeOrmModule.forRoot({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: [Notificacion,Producto,Publicacion,Usuario,Valoracion],
  synchronize: true,
});