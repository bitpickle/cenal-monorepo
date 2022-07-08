import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateTemaDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
}

export class UpdateTemaDTO {
  @IsOptional()
  @IsString()
  @ApiProperty()
  name?: string;
}
