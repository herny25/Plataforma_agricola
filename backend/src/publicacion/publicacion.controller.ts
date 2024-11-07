import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { Publicacion } from './publicacion.entity';

@Controller('publicaciones')
export class PublicacionController {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Get()
  findAll(): Promise<Publicacion[]> {
    return this.publicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Publicacion> {
    return this.publicacionService.findOne(id);
  }

  @Post()
  create(@Body() publicacion: Publicacion): Promise<Publicacion> {
    return this.publicacionService.create(publicacion);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() publicacion: Partial<Publicacion>): Promise<void> {
    return this.publicacionService.update(id, publicacion);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.publicacionService.remove(id);
  }
}
