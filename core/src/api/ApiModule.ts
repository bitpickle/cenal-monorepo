import { Module } from '@nestjs/common';
import { CursosModule } from './cursos/CursosModule';
import { MainModule } from './main/MainModule';

@Module({
  imports: [CursosModule, MainModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
