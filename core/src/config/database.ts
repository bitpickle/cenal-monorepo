import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';

class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: "mysql",
      url: configService.get('DB_URL'),
      // ssl: { rejectUnauthorized: false },
    //   entities: [
    //     __dirname + '/**/entities/*.entity{.ts,.js}',
    //   ],
      autoLoadEntities: true,
      synchronize: configService.get('DB_SYNC'),
      logging: true,
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService]
};