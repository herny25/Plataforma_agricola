import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicacionModule } from './publicacion/publicacion.module';
import { ProductoModule } from './producto/producto.module';
import { NotificacionModule } from './notificacion/notificacion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ValoracionModule } from './valoracion/valoracion.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: '123456',
      database: 'plataforma_agricola',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    PublicacionModule,
    ProductoModule,
    NotificacionModule,
    UsuarioModule,
    ValoracionModule,
  ],
})
export class AppModule {}