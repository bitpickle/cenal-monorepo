import { Column, Entity } from 'typeorm';
import CustomBaseEntity from '../../shared/CustomBaseEntity';

export enum LeisTipos {
  MUNICIPAL = 'municipal',
  ESTADUAL = 'estadual',
  FEDERAL = 'federal',
}

@Entity('leis')
export class Lei extends CustomBaseEntity {
  @Column({
    nullable: false,
  })
  title: string;

  @Column({
    nullable: false,
  })
  uri: string;

  @Column({
    type: 'enum',
    enum: LeisTipos,
    default: LeisTipos.FEDERAL,
  })
  tipo: LeisTipos;

  @Column({
    nullable: true,
    default: null,
  })
  id_parent?: string;
}
