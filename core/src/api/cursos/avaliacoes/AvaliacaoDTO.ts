import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class PerguntaDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @ApiProperty()
  alternativas: AlternativaDTO[];
}

export class AlternativaDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  content: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  isCorrect: boolean;
}

export class CreateAvaliacaoDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @ArrayMinSize(2)
  @ApiProperty()
  perguntas: PerguntaDTO[];

  @IsUUID()
  @ApiProperty()
  modulo: string;
}

export class UpdateAvaliacaoDTO {
  @IsOptional()
  @IsString()
  @ApiProperty()
  title?: string;
}
