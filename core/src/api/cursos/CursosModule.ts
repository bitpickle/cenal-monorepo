import { Module } from '@nestjs/common';
import { AulasModule } from './/aulas/AulasModule';
import { AvaliacoesModule } from './avaliacoes/AvaliacoesModule';
import { ModulosModule } from './modulos/ModulosModule';
import { TemasModule } from './temas/TemasModule';

@Module({
  imports: [AulasModule, ModulosModule, TemasModule, AvaliacoesModule],
  controllers: [],
  providers: [],
})
export class CursosModule {}
