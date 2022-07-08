import { ApiProperty } from '@nestjs/swagger';

type ServicosCamaraType = {
  id: string;
};

export class CreateCamaraDTO {
  @ApiProperty()
  cidade: number;

  @ApiProperty()
  servicos: ServicosCamaraType[];
}
