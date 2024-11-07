import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Publicacion } from './publicacion.entity';

@Injectable()
export class PublicacionService {
  constructor(
    @InjectRepository(Publicacion)
    private publicacionRepository: Repository<Publicacion>,
  ) {}

  async findAll(): Promise<Publicacion[]> {
    return this.publicacionRepository.find();
  }

  async findOne(id: number): Promise<Publicacion> {
    return this.publicacionRepository.findOne({ where: { id_publicacion: id } });
  }

  async create(publicacion: Publicacion): Promise<Publicacion> {
    return this.publicacionRepository.save(publicacion);
  }

  async update(id: number, publicacion: Partial<Publicacion>): Promise<void> {
    await this.publicacionRepository.update(id, publicacion);
  }

  async remove(id: number): Promise<void> {
    await this.publicacionRepository.delete(id);
  }
}
