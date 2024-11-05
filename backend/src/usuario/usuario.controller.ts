import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity/usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  obtenerUsuarios(): Promise<Usuario[]> {
    return this.usuarioService.obtenerUsuarios();
  }

  @Get(':id')
  obtenerUsuario(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.obtenerUsuario(id);
  }

  @Post()
  crearUsuario(@Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.crearUsuario(usuarioData);
  }

  @Put(':id')
  actualizarUsuario(@Param('id') id: number, @Body() usuarioData: Partial<Usuario>): Promise<Usuario> {
    return this.usuarioService.actualizarUsuario(id, usuarioData);
  }

  @Delete(':id')
  eliminarUsuario(@Param('id') id: number): Promise<void> {
    return this.usuarioService.eliminarUsuario(id);
  }
}
