import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Camara } from './Camara';
import { CreateCamaraDTO } from './CamaraDTO';

@Injectable()
export class CamarasService {
  constructor(
    @InjectRepository(Camara)
    private camarasRepository: Repository<Camara>,
  ) {}

  create(data: CreateCamaraDTO): Promise<Camara> {
    return this.camarasRepository.save({
      cidade: { id: data.cidade },
      servicos: [...data.servicos],
    });
  }

  findAll(): Promise<Camara[]> {
    return this.camarasRepository.find();
  }

  findOne(id: string): Promise<Camara> {
    return this.camarasRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.camarasRepository.delete(id);
  }
}
