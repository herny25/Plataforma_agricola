import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { Valoracion } from 'src/valoracion/entities/valoracion.entity';
import { Notificacion } from 'src/notificacion/entities/notificacion.entity';
import { Producto } from 'src/producto/entities/producto.entity';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Producto, Notificacion, Valoracion])],
  controllers: [UsuarioController],
  providers: [UsuarioService]
})
export class UsuarioModule {}
