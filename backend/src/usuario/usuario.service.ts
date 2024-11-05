import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity/usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async crearUsuario(usuarioData: Partial<Usuario>): Promise<Usuario> {
    const usuario = this.usuarioRepository.create(usuarioData);
    return this.usuarioRepository.save(usuario);
  }

  async obtenerUsuarios(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async obtenerUsuario(id: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ id });
  }

  async actualizarUsuario(id: number, usuarioData: Partial<Usuario>): Promise<Usuario> {
    await this.usuarioRepository.update(id, usuarioData);
    return this.usuarioRepository.findOneBy({ id });
  }

  async eliminarUsuario(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }
}
