import { Module } from '@nestjs/common';
import { CamarasModule } from './camaras/CamarasModule';
import { CidadesModule } from './cidades/CidadesModule';
import { EstadosModule } from './estados/EstadosModule';
import { ServicosModule } from './servicos/ServicosModule';

@Module({
  imports: [CamarasModule, CidadesModule, EstadosModule, ServicosModule],
  controllers: [],
  providers: [],
})
export class MainModule {}
