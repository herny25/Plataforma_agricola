import { IsString, IsOptional, IsDate, IsEnum, IsInt, MinLength, MaxLength } from 'class-validator';

export class UpdateUsuarioDto {
  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  nombre?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(50)
  apellido?: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(100)
  nombre_usuario?: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  @MaxLength(255)
  contrasena?: string;

  @IsString()
  @IsOptional()
  @MinLength(2)
  @MaxLength(100)
  municipio?: string;

  @IsDate()
  @IsOptional()
  fecha_nacimiento?: Date;

  @IsEnum(['Masculino', 'Femenino', 'Otro'])
  @IsOptional()
  sexo?: string;

  @IsString()
  @IsOptional()
  foto_perfil?: string;
}
