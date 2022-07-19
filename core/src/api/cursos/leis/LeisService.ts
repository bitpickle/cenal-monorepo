import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lei, LeisTipos } from './Lei';
import { CreateLeiDTO, UpdateLeiDTO } from './LeiDTO';

@Injectable()
export class LeisService {
  constructor(
    @InjectRepository(Lei)
    private leisRepository: Repository<Lei>,
  ) {}

  async create(data: CreateLeiDTO): Promise<Lei> {
    return this.leisRepository.save({
      title: data.title,
      uri: data.uri,
      tipo: data.tipo,
      id_parent: data.id_parent,
    });
  }

  findAll(): Promise<Lei[]> {
    return this.leisRepository.find();
  }

  findOne(id: string): Promise<Lei> {
    return this.leisRepository.findOne({ where: { id } });
  }

  async remove(id: string): Promise<void> {
    await this.leisRepository.delete(id);
  }

  update(id: string, data: UpdateLeiDTO) {
    this.leisRepository.update(
      { id },
      {
        title: data.title,
        uri: data.uri,
      },
    );
  }

  getFederais() {
    return this.leisRepository.findBy({
      tipo: LeisTipos.FEDERAL,
      id_parent: null,
    });
  }

  getEstaduais(idEstado: string) {
    return this.leisRepository.findBy({
      tipo: LeisTipos.ESTADUAL,
      id_parent: idEstado,
    });
  }

  getMunicipais(idCidade: string) {
    return this.leisRepository.findBy({
      tipo: LeisTipos.MUNICIPAL,
      id_parent: idCidade,
    });
  }
}
