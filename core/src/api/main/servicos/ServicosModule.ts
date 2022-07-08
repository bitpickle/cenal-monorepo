import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Servico } from './Servico';
import { ServicosController } from './ServicosController';
import { ServicosService } from './ServicosService';

@Module({
  imports: [TypeOrmModule.forFeature([Servico])],
  controllers: [ServicosController],
  providers: [ServicosService],
})
export class ServicosModule {}
