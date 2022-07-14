import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Avaliacao } from './Avaliacao';
import { CreateAvaliacaoDTO, UpdateAvaliacaoDTO } from './AvaliacaoDTO';

@Injectable()
export class AvaliacoesService {
  constructor(
    @InjectRepository(Avaliacao)
    private avaliacoesRepository: Repository<Avaliacao>,
  ) {}

  async create(data: CreateAvaliacaoDTO): Promise<Avaliacao> {
    return this.avaliacoesRepository.save({
      title: data.title,
      perguntas: data.perguntas,
      modulo: { id: data.modulo },
    });
  }

  findAll(): Promise<Avaliacao[]> {
    return this.avaliacoesRepository.find();
  }

  findOne(id: string): Promise<Avaliacao> {
    return this.avaliacoesRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.avaliacoesRepository.delete(id);
  }

  update(id: string, data: UpdateAvaliacaoDTO) {
    this.avaliacoesRepository.update(
      { id },
      {
        title: data.title,
      },
    );
  }
}
