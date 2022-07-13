import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateAulaDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  video: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  image: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  written: string;

  @IsUUID()
  @ApiProperty()
  modulo: string;
}

export class UpdateAulaDTO {
  @IsOptional()
  @IsString()
  @ApiProperty()
  title?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  video?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  image?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  written?: string;
}
