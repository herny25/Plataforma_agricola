import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ValoracionService } from './valoracion.service';
import { Valoracion } from './valoracion.entity';

@Controller('valoraciones')
export class ValoracionController {
  constructor(private readonly valoracionService: ValoracionService) {}

  @Get()
  findAll(): Promise<Valoracion[]> {
    return this.valoracionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Valoracion> {
    return this.valoracionService.findOne(id);
  }

  @Post()
  create(@Body() valoracion: Valoracion): Promise<Valoracion> {
    return this.valoracionService.create(valoracion);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() valoracion: Partial<Valoracion>): Promise<void> {
    return this.valoracionService.update(id, valoracion);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.valoracionService.remove(id);
  }
}
