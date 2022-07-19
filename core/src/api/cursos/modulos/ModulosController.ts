import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateModuloDTO, UpdateModuloDTO } from './ModuloDTO';
import { ModulosService } from './ModulosService';

@Controller('modulos')
export class ModulosController {
  constructor(private readonly modulosService: ModulosService) {}

  @Post()
  create(@Body() data: CreateModuloDTO) {
    return this.modulosService.create(data);
  }

  @Get()
  findAll() {
    return this.modulosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modulosService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateModuloDTO) {
    return this.modulosService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modulosService.remove(id);
  }

  @Get(':id/aulas')
  getAulas(@Param('id') id: string) {
    return this.modulosService.getAulas(id);
  }

  @Get(':id/avaliacoes')
  getAvaliacoes(@Param('id') id: string) {
    return this.modulosService.getAvaliacoes(id);
  }
}
