import CustomBaseEntity from 'src/api/shared/CustomBaseEntity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Alternativa } from './Alternativa';
import { Avaliacao } from './Avaliacao';

@Entity('perguntas')
export class Pergunta extends CustomBaseEntity {
  @Column({
    nullable: false,
  })
  content: string;

  @OneToMany((type) => Alternativa, (alternativa) => alternativa.pergunta, {
    eager: true,
    cascade: true,
  })
  alternativas: Alternativa[];

  @ManyToOne((type) => Avaliacao, (avaliacao) => avaliacao.perguntas, {
    onDelete: 'CASCADE',
  })
  avaliacao: Avaliacao;
}
