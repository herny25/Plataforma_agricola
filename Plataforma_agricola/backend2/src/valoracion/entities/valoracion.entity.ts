import { Producto } from 'src/producto/entities/producto.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Check } from 'typeorm';

@Entity()
@Check('"puntuacion" >= 1 AND "puntuacion" <= 5')
export class Valoracion {
  @PrimaryGeneratedColumn()
  id_valoracion: number;

  @Column()
  puntuacion: number;

  @Column({ type: 'text', nullable: true })
  comentario: string;

  @Column({ type: 'date' })
  fecha_valoracion: Date;

  // Relaciones
  @ManyToOne(() => Usuario, (usuario) => usuario.valoraciones)
  usuario: Usuario;

  @ManyToOne(() => Producto, (producto) => producto.valoraciones)
  producto: Producto;
}
