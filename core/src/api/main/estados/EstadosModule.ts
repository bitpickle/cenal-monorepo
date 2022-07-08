import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Estado } from './Estado';

@Module({
  imports: [TypeOrmModule.forFeature([Estado])],
  controllers: [],
  providers: [],
})
export class EstadosModule {}
