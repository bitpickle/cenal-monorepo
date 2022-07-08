import CustomBaseEntity from 'src/api/shared/CustomBaseEntity';
import { Column, Entity } from 'typeorm';

@Entity('servicos')
export class Servico extends CustomBaseEntity {
  @Column({
    nullable: false,
  })
  name: string;
}
