import { Column, Entity, ManyToOne } from 'typeorm';
import CustomBaseEntity from '../../shared/CustomBaseEntity';
import { Pergunta } from './Pergunta';

@Entity('alternativas')
export class Alternativa extends CustomBaseEntity {
  @Column({
    nullable: false,
  })
  content: string;

  @Column({
    nullable: false,
  })
  isCorrect: boolean;

  @ManyToOne((type) => Pergunta, (pergunta) => pergunta.alternativas, {
    onDelete: 'CASCADE',
  })
  pergunta: Pergunta;
}
