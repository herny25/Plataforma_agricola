import { Module } from '@nestjs/common';
import { ValoracionService } from './valoracion.service';
import { ValoracionController } from './valoracion.controller';

@Module({
  controllers: [ValoracionController],
  providers: [ValoracionService],
})
export class ValoracionModule {}
