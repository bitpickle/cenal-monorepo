import { Column, Entity, ManyToOne } from 'typeorm';
import CustomBaseEntity from '../../shared/CustomBaseEntity';
import { Modulo } from '../modulos/Modulo';

@Entity('aulas')
export class Aula extends CustomBaseEntity {
  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  video: string;

  @Column({
    nullable: false,
  })
  image: string;

  @Column({
    nullable: false,
    type: 'longtext',
  })
  written: string;

  @Column({
    nullable: false,
    type: 'integer',
  })
  index: number;

  @ManyToOne((type) => Modulo, (modulo) => modulo.aulas, { eager: true })
  modulo: Modulo;
}
