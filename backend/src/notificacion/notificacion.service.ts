import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Notificacion } from './notificacion.entity';

@Injectable()
export class NotificacionService {
  constructor(
    @InjectRepository(Notificacion)
    private notificacionRepository: Repository<Notificacion>,
  ) {}

  async findAll(): Promise<Notificacion[]> {
    return this.notificacionRepository.find();
  }

  async findOne(id: number): Promise<Notificacion> {
    return this.notificacionRepository.findOne({ where: { id_notificacion: id } });
  }

  async create(notificacion: Notificacion): Promise<Notificacion> {
    return this.notificacionRepository.save(notificacion);
  }

  async update(id: number, notificacion: Partial<Notificacion>): Promise<void> {
    await this.notificacionRepository.update(id, notificacion);
  }

  async remove(id: number): Promise<void> {
    await this.notificacionRepository.delete(id);
  }
}
