import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { Camara } from './Camara';
import { CreateCamaraDTO } from './CamaraDTO';
import { CamarasService } from './CamarasService';

@Controller('camaras')
export class CamarasController {
  constructor(private readonly camaraService: CamarasService) {}

  @Post()
  create(@Body() data: CreateCamaraDTO) {
    return this.camaraService.create(data);
  }

  @Get()
  findAll() {
    return this.camaraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.camaraService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: Camara) {
    // return this.camaraService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.camaraService.remove(id);
  }
}
