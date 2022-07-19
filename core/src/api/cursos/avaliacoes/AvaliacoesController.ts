import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateAvaliacaoDTO, UpdateAvaliacaoDTO } from './AvaliacaoDTO';
import { AvaliacoesService } from './AvaliacoesService';

@Controller('avaliacoes')
export class AvaliacoesController {
  constructor(private readonly avaliacoesService: AvaliacoesService) {}

  @Post()
  create(@Body() data: CreateAvaliacaoDTO) {
    return this.avaliacoesService.create(data);
  }

  @Get()
  findAll() {
    return this.avaliacoesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliacoesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateAvaliacaoDTO) {
    return this.avaliacoesService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.avaliacoesService.remove(id);
  }
}
