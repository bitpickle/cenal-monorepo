import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aula } from './Aula';
import { AulasController } from './AulasController';
import { AulasService } from './AulasService';

@Module({
  imports: [TypeOrmModule.forFeature([Aula])],
  controllers: [AulasController],
  providers: [AulasService],
})
export class AulasModule {}
