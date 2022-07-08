import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Camara } from './Camara';
import { CamarasController } from './CamarasController';
import { CamarasService } from './CamarasService';

@Module({
  imports: [TypeOrmModule.forFeature([Camara])],
  controllers: [CamarasController],
  providers: [CamarasService],
})
export class CamarasModule {}
