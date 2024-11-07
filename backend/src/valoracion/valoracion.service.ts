import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Valoracion } from './valoracion.entity';

@Injectable()
export class ValoracionService {
  constructor(
    @InjectRepository(Valoracion)
    private valoracionRepository: Repository<Valoracion>,
  ) {}

  async findAll(): Promise<Valoracion[]> {
    return this.valoracionRepository.find();
  }

  async findOne(id: number): Promise<Valoracion> {
    return this.valoracionRepository.findOne({ where: { id_valoracion: id } });
  }

  async create(valoracion: Valoracion): Promise<Valoracion> {
    return this.valoracionRepository.save(valoracion);
  }

  async update(id: number, valoracion: Partial<Valoracion>): Promise<void> {
    await this.valoracionRepository.update(id, valoracion);
  }

  async remove(id: number): Promise<void> {
    await this.valoracionRepository.delete(id);
  }
}
