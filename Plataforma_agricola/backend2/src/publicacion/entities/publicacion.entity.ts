import { Producto } from 'src/producto/entities/producto.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Publicacion {
  @PrimaryGeneratedColumn()
  id_publicacion: number;

  @Column({ type: 'date' })
  fecha_publicacion: Date;

  @Column({ type: 'enum', enum: ['activa', 'inactiva'], default: 'activa' })
  estado_publicacion: string;

  // Relaciones
  @ManyToOne(() => Producto, (producto) => producto.publicaciones)
  producto: Producto;
}
