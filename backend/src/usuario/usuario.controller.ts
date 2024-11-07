import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Usuario> {
    return this.usuarioService.findOne(id);
  }

  @Post()
  create(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.create(usuario);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() usuario: Partial<Usuario>): Promise<void> {
    return this.usuarioService.update(id, usuario);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.usuarioService.remove(id);
  }
}
