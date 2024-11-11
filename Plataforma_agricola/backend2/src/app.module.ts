import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { dbConfig } from './dbConfig';
import { ValoracionModule } from './valoracion/valoracion.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PublicacionModule } from './publicacion/publicacion.module';
import { ProductoModule } from './producto/producto.module';
import { NotificacionModule } from './notificacion/notificacion.module';


@Module({
  imports: [dbConfig, ValoracionModule, UsuarioModule, PublicacionModule, ProductoModule, NotificacionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
