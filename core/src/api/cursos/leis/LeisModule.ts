import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lei } from './Lei';
import { LeisController } from './LeisController';
import { LeisService } from './LeisService';

@Module({
  imports: [TypeOrmModule.forFeature([Lei])],
  controllers: [LeisController],
  providers: [LeisService],
})
export class LeisModule {}
