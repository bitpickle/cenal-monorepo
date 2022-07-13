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

  async create(data: CreateAulaDTO): Promise<Aula> {
    return this.aulasRepository.save({
      title: data.title,
      video: data.video,
      written: data.written,
      modulo: { id: data.modulo },
      image: data.image,
      index:
        (await this.aulasRepository.count({
          where: { modulo: { id: data.modulo } },
        })) + 1,
    });
  }

  findAll(): Promise<Aula[]> {
    return this.aulasRepository.find({ order: { index: 'ASC' } });
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
        image: data.image,
        written: data.written,
      },
    );
  }
}
