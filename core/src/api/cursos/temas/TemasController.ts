import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateTemaDTO, UpdateTemaDTO } from './TemaDTO';
import { TemasService } from './TemasService';

@Controller('temas')
export class TemasController {
  constructor(private readonly temaService: TemasService) {}

  @Post()
  create(@Body() data: CreateTemaDTO) {
    return this.temaService.create(data);
  }

  @Get()
  findAll() {
    return this.temaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateTemaDTO) {
    return this.temaService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temaService.remove(id);
  }
}
