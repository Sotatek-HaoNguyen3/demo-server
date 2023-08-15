import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { resolve } from 'path';
import { User } from 'src/modules/users/entities/user.entity';
import { UserGroup } from 'src/modules/user-groups/entities/user-groups.entity';
import { UserGroupPermission } from 'src/modules/user-group-permissions/entities/user-group-permissions.entity';
import { Permission } from 'src/modules/permissions/entities/permissions.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        return {
          type: 'mysql',
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USER'),
          password: configService.get('DB_PASS'),
          database: configService.get('DB_NAME'),
          entities: [User, UserGroup, UserGroupPermission, Permission],
          timezone: '+00:00',
          synchronize: true,
          debug: false,
          migrations: [resolve(__dirname, 'database/migrations/*{.ts,.js}')],
          logging: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseSQLModule {}
