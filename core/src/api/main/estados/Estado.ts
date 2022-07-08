import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Cidade } from '../cidades/Cidade';

@Entity('estados')
export class Estado {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({
    nullable: false,
  })
  name: string;

  @Column({
    nullable: false,
  })
  sigla: string;

  @OneToMany((type) => Cidade, (cidade) => cidade.estado, { lazy: true })
  cidade: Cidade[];
}
