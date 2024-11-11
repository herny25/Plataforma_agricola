import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll() {
    return this.usuarioRepository.find();
  }

  async findId(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id_usuario: id } });
    if (!usuario) {
      throw new NotFoundException("Usuario no encontrado");
    }
    return usuario;
  }

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    const newUsuario = this.usuarioRepository.create(createUsuarioDto);
    return await this.usuarioRepository.save(newUsuario);
  }

  async update(id: number, updateUsuarioDto: UpdateUsuarioDto): Promise<Usuario> {
    const usuario = await this.findId(id)

    Object.assign(usuario, updateUsuarioDto);

    return this.usuarioRepository.save(usuario);
  }

  async remove(id: number): Promise<void> {
    await this.findId(id)
    
    await this.usuarioRepository.delete(id);
  }

  async findByUsername(nombre_usuario: string): Promise<Usuario | undefined> {
    return this.usuarioRepository.findOne({ where: { nombre_usuario } });
  } 
}
