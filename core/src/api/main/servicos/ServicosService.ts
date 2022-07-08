import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from './Servico';

@Injectable()
export class ServicosService {
  constructor(
    @InjectRepository(Servico)
    private servicosRepository: Repository<Servico>,
  ) {}

  create(data: Servico): Promise<Servico> {
    return this.servicosRepository.save(data);
  }

  findAll(): Promise<Servico[]> {
    return this.servicosRepository.find();
  }

  findOne(id: string): Promise<Servico> {
    return this.servicosRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.servicosRepository.delete(id);
  }
}
