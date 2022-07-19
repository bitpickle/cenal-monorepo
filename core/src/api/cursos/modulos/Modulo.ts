import CustomBaseEntity from 'src/api/shared/CustomBaseEntity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Aula } from '../aulas/Aula';
import { Avaliacao } from '../avaliacoes/Avaliacao';
import { Tema } from '../temas/Tema';

@Entity('modulos')
export class Modulo extends CustomBaseEntity {
  @Column()
  name: string;

  @ManyToOne((type) => Tema, (tema) => tema.modulos, { lazy: true })
  tema: Tema;

  @OneToMany((type) => Aula, (aula) => aula.modulo, { lazy: true })
  aulas?: Aula[];

  @OneToMany((type) => Avaliacao, (avaliacao) => avaliacao.modulo, {
    lazy: true,
  })
  avaliacoes?: Avaliacao[];
}
