import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tema } from './Tema';
import { CreateTemaDTO, UpdateTemaDTO } from './TemaDTO';

@Injectable()
export class TemasService {
  constructor(
    @InjectRepository(Tema)
    private temasRepository: Repository<Tema>,
  ) {}

  create(data: CreateTemaDTO): Promise<Tema> {
    return this.temasRepository.save({ name: data.name });
  }

  findAll(): Promise<Tema[]> {
    return this.temasRepository.find();
  }

  findOne(id: string): Promise<Tema> {
    return this.temasRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.temasRepository.delete(id);
  }

  update(id: string, data: UpdateTemaDTO) {
    this.temasRepository.update({ id }, { name: data.name });
  }
}
