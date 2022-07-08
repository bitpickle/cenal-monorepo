import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Estado } from '../estados/Estado';

@Entity('cidades')
export class Cidade {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @ManyToOne((type) => Estado, (estado) => estado.cidade, { eager: true })
  estado: Estado;
}
