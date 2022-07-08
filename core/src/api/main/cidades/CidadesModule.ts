import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cidade } from './Cidade';

@Module({
  imports: [TypeOrmModule.forFeature([Cidade])],
  controllers: [],
  providers: [],
})
export class CidadesModule {}
