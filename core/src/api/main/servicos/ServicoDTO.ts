import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateServicoDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  name: string;
}
