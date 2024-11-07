import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from 'src/usuario/usuario.entity';

@Entity()
export class Notificacion {
  @PrimaryGeneratedColumn()
  id_notificacion: number;

  @Column({ type: 'enum', enum: ['venta', 'mensaje', 'valoracion'] })
  tipo: string;

  @Column({ type: 'text' })
  contenido: string;

  @Column({ type: 'date' })
  fecha_envio: Date;

  // Relaciones
  @ManyToOne(() => Usuario, (usuario) => usuario.notificaciones)
  usuario: Usuario;
}
