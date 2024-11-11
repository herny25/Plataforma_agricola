import { Injectable } from '@nestjs/common';
import { CreateValoracionDto } from './dto/create-valoracion.dto';
import { UpdateValoracionDto } from './dto/update-valoracion.dto';

@Injectable()
export class ValoracionService {
  create(createValoracionDto: CreateValoracionDto) {
    return 'This action adds a new valoracion';
  }

  findAll() {
    return `This action returns all valoracion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} valoracion`;
  }

  update(id: number, updateValoracionDto: UpdateValoracionDto) {
    return `This action updates a #${id} valoracion`;
  }

  remove(id: number) {
    return `This action removes a #${id} valoracion`;
  }
}
