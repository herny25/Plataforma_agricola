import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valoracion } from './valoracion.entity';
import { ValoracionService } from './valoracion.service';
import { ValoracionController } from './valoracion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Valoracion])],
  providers: [ValoracionService],
  controllers: [ValoracionController],
  exports: [ValoracionService],
})
export class ValoracionModule {}
