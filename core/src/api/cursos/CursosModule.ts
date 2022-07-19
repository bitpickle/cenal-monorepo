import { Module } from '@nestjs/common';
import { AulasModule } from './/aulas/AulasModule';
import { AvaliacoesModule } from './avaliacoes/AvaliacoesModule';
import { LeisModule } from './leis/LeisModule';
import { ModulosModule } from './modulos/ModulosModule';
import { TemasModule } from './temas/TemasModule';

@Module({
  imports: [
    AulasModule,
    ModulosModule,
    TemasModule,
    AvaliacoesModule,
    LeisModule,
  ],
  controllers: [],
  providers: [],
})
export class CursosModule {}
