import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateLeiDTO, UpdateLeiDTO } from './LeiDTO';
import { LeisService } from './LeisService';

@Controller('leis')
export class LeisController {
  constructor(private readonly leisService: LeisService) {}

  @Post()
  create(@Body() data: CreateLeiDTO) {
    return this.leisService.create(data);
  }

  @Get()
  findAll() {
    return this.leisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leisService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateLeiDTO) {
    return this.leisService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.leisService.remove(id);
  }
}
