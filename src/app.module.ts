import { DatabaseModule } from './database/database.module';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import * as dotenv from 'dotenv';
import { PermissionsModule } from './modules/permissions/permissions.module';
import { UserGroupModule } from './modules/user-groups/user-group.module';
import { UserGroupPermissionsModule } from './modules/user-group-permissions/user-group-permissions.module';
dotenv.config();

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UsersModule,
    PermissionsModule,
    UserGroupModule,
    UserGroupPermissionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'cats', method: RequestMethod.GET });
  }
}
