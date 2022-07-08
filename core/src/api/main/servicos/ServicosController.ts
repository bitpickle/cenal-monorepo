import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Servico } from './Servico';
import { ServicosService } from './ServicosService';

@Controller('servicos')
export class ServicosController {
  constructor(private readonly servicoService: ServicosService) {}

  @Post()
  create(@Body() data: Servico) {
    return this.servicoService.create(data);
  }

  @Get()
  findAll() {
    return this.servicoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Servico) {
    // return this.servicoService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicoService.remove(id);
  }
}
