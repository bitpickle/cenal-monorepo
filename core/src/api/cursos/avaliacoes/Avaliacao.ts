import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import CustomBaseEntity from '../../shared/CustomBaseEntity';
import { Modulo } from '../modulos/Modulo';
import { Pergunta } from './Pergunta';

@Entity('avaliacoes')
export class Avaliacao extends CustomBaseEntity {
  @Column({
    nullable: false,
  })
  title: string;

  @OneToMany((type) => Pergunta, (pergunta) => pergunta.avaliacao, {
    eager: true,
    cascade: true,
  })
  perguntas: Pergunta[];

  @ManyToOne((type) => Modulo, (modulo) => modulo.aulas)
  modulo: Modulo;
}
