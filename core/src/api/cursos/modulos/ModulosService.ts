import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Modulo } from './Modulo';
import { CreateModuloDTO, UpdateModuloDTO } from './ModuloDTO';

@Injectable()
export class ModulosService {
  constructor(
    @InjectRepository(Modulo)
    private modulosRepository: Repository<Modulo>,
  ) {}

  create(data: CreateModuloDTO): Promise<Modulo> {
    return this.modulosRepository.save({
      name: data.name,
      tema: { id: data.tema },
    });
  }

  findAll(): Promise<Modulo[]> {
    return this.modulosRepository.find();
  }

  findOne(id: string): Promise<Modulo> {
    return this.modulosRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    this.modulosRepository.delete(id);
  }

  update(id: string, data: UpdateModuloDTO) {
    return this.modulosRepository.update({ id }, { name: data.name });
  }
}
