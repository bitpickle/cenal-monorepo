import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Aula } from './Aula';
import { CreateAulaDTO, UpdateAulaDTO } from './AulaDTO';

@Injectable()
export class AulasService {
  constructor(
    @InjectRepository(Aula)
    private aulasRepository: Repository<Aula>,
  ) {}

  create(data: CreateAulaDTO): Promise<Aula> {
    return this.aulasRepository.save({
      title: data.title,
      video: data.video,
      written: data.written,
      modulo: { id: data.modulo },
    });
  }

  findAll(): Promise<Aula[]> {
    return this.aulasRepository.find();
  }

  findOne(id: string): Promise<Aula> {
    return this.aulasRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.aulasRepository.delete(id);
  }

  update(id: string, data: UpdateAulaDTO) {
    this.aulasRepository.update(
      { id },
      {
        title: data.title,
        video: data.video,
        written: data.written,
      },
    );
  }
}
