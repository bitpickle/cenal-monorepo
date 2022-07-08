import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Modulo } from './Modulo';
import { ModulosController } from './ModulosController';
import { ModulosService } from './ModulosService';

@Module({
  imports: [TypeOrmModule.forFeature([Modulo])],
  controllers: [ModulosController],
  providers: [ModulosService],
})
export class ModulosModule {}
