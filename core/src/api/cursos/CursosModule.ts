import { Module } from '@nestjs/common';
import { AulasModule } from './/aulas/AulasModule';
import { ModulosModule } from './modulos/ModulosModule';
import { TemasModule } from './temas/TemasModule';

@Module({
  imports: [AulasModule, ModulosModule, TemasModule],
  controllers: [],
  providers: [],
})
export class CursosModule {}
