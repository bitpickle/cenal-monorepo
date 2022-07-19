import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';
import { LeisTipos } from './Lei';

export class CreateLeiDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  uri: string;

  @IsNotEmpty()
  @ApiProperty({ enum: LeisTipos })
  tipo: LeisTipos;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  id_parent: string;
}

export class UpdateLeiDTO {
  @IsOptional()
  @IsString()
  @ApiProperty()
  title: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  uri: string;
}
