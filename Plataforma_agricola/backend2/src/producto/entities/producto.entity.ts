import { Publicacion } from 'src/publicacion/entities/publicacion.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Valoracion } from 'src/valoracion/entities/valoracion.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id_producto: number;

  @Column({ length: 100 })
  nombre_producto: string;

  @Column({ type: 'text' })
  descripcion: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'date' })
  fecha_publicacion: Date;

  @Column({ type: 'enum', enum: ['disponible', 'vendido'], default: 'disponible' })
  estado: string;

  @Column({ length: 255, nullable: true })
  imagen: string;

  // Relaciones
  @ManyToOne(() => Usuario, (usuario) => usuario.productos)
  usuario: Usuario;

  @OneToMany(() => Publicacion, (publicacion) => publicacion.producto)
  publicaciones: Publicacion[];

  @OneToMany(() => Valoracion, (valoracion) => valoracion.producto)
  valoraciones: Valoracion[];
}
