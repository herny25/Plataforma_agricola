import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { Notificacion } from './notificacion.entity';

@Controller('notificaciones')
export class NotificacionController {
  constructor(private readonly notificacionService: NotificacionService) {}

  @Get()
  findAll(): Promise<Notificacion[]> {
    return this.notificacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Notificacion> {
    return this.notificacionService.findOne(id);
  }

  @Post()
  create(@Body() notificacion: Notificacion): Promise<Notificacion> {
    return this.notificacionService.create(notificacion);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() notificacion: Partial<Notificacion>): Promise<void> {
    return this.notificacionService.update(id, notificacion);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.notificacionService.remove(id);
  }
}
