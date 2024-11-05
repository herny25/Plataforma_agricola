import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreCompleto: string;

  @Column()
  nombreUsuario: string;

  @Column()
  contraseña: string;

  @Column({ type: 'date' })
  fechaNacimiento: Date;

  @Column()
  municipio: string;

  @Column()
  sexo: string;
}
