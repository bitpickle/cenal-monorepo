import CustomBaseEntity from 'src/api/shared/CustomBaseEntity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Modulo } from '../modulos/Modulo';

@Entity('temas')
export class Tema extends CustomBaseEntity {
  @Column()
  name: string;

  @OneToMany((type) => Modulo, (modulo) => modulo.tema, { eager: true })
  modulos: Modulo[];
}
