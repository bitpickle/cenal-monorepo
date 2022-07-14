import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alternativa } from './Alternativa';
import { Avaliacao } from './Avaliacao';
import { AvaliacoesController } from './AvaliacoesController';
import { AvaliacoesService } from './AvaliacoesService';
import { Pergunta } from './Pergunta';

@Module({
  imports: [TypeOrmModule.forFeature([Avaliacao, Pergunta, Alternativa])],
  controllers: [AvaliacoesController],
  providers: [AvaliacoesService],
})
export class AvaliacoesModule {}
