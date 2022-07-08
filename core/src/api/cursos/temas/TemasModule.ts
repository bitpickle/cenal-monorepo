import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tema } from './Tema';
import { TemasController } from './TemasController';
import { TemasService } from './TemasService';

@Module({
  imports: [TypeOrmModule.forFeature([Tema])],
  controllers: [TemasController],
  providers: [TemasService],
})
export class TemasModule {}
