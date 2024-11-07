import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Producto } from '../producto/producto.entity';
import { Notificacion } from '../notificacion/notificacion.entity';
import { Valoracion } from '../valoracion/valoracion.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 50 })
  apellido: string;

  @Column({ length: 100, unique: true })
  nombre_usuario: string;

  @Column({ length: 255 })
  contrasena: string;

  @Column({ length: 100 })
  municipio: string;

  @Column({ type: 'date' })
  fecha_nacimiento: Date;

  @Column({ type: 'enum', enum: ['Masculino', 'Femenino', 'Otro'] })
  sexo: string;

  @Column({ length: 255, nullable: true })
  foto_perfil: string;

  // Relaciones
  @OneToMany(() => Producto, (producto) => producto.usuario)
  productos: Producto[];

  @OneToMany(() => Notificacion, (notificacion) => notificacion.usuario)
  notificaciones: Notificacion[];

  @OneToMany(() => Valoracion, (valoracion) => valoracion.usuario)
  valoraciones: Valoracion[];
}
