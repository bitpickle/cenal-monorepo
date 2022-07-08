import CustomBaseEntity from 'src/api/shared/CustomBaseEntity';
import { Entity, JoinColumn, JoinTable, ManyToMany, OneToOne } from 'typeorm';
import { Cidade } from '../cidades/Cidade';
import { Servico } from '../servicos/Servico';

@Entity('camaras')
export class Camara extends CustomBaseEntity {
  @OneToOne(() => Cidade, { eager: true })
  @JoinColumn()
  cidade: Cidade;

  @ManyToMany(() => Servico)
  @JoinTable()
  servicos: Servico[];
}
