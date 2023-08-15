import { Module } from '@nestjs/common';
import { UserGroupPermissionsController } from './user-group-permissions.controller';
import { UserGroupPermissionsService } from './user-group-permissions.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroupPermission } from './entities/user-group-permissions.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserGroupPermission])],
  controllers: [UserGroupPermissionsController],
  providers: [UserGroupPermissionsService],
})
export class UserGroupPermissionsModule {}
