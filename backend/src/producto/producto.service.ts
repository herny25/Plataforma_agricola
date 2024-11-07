import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  async findAll(): Promise<Producto[]> {
    return this.productoRepository.find();
  }

  async findOne(id: number): Promise<Producto> {
    return this.productoRepository.findOne({ where: { id_producto: id } });
  }

  async create(producto: Producto): Promise<Producto> {
    return this.productoRepository.save(producto);
  }

  async update(id: number, producto: Partial<Producto>): Promise<void> {
    await this.productoRepository.update(id, producto);
  }

  async remove(id: number): Promise<void> {
    await this.productoRepository.delete(id);
  }
}
