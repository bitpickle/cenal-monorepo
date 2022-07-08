import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAulaDTO, UpdateAulaDTO } from './AulaDTO';
import { AulasService } from './AulasService';

@Controller('aulas')
export class AulasController {
  constructor(private readonly aulasService: AulasService) {}

  @Post()
  create(@Body() data: CreateAulaDTO) {
    return this.aulasService.create(data);
  }

  @Get()
  findAll() {
    return this.aulasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aulasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateAulaDTO) {
    return this.aulasService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aulasService.remove(id);
  }
}
