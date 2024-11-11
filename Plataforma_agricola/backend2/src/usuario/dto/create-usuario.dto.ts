import { IsString, IsNotEmpty, IsEnum, IsOptional, IsDateString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsString()
  @IsNotEmpty()
  nombre_usuario: string;

  @IsString()
  @IsNotEmpty()
  contrasena: string;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsDateString()
  fecha_nacimiento: Date;

  @IsEnum(['Masculino', 'Femenino', 'Otro'])
  sexo: string;

  @IsOptional()
  @IsString()
  foto_perfil: string;
}
