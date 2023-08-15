import { Module } from '@nestjs/common';
import { UserGroupController } from './user-groups.controller';
import { UserGroupService } from './user-group.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserGroup } from './entities/user-groups.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserGroup])],
  controllers: [UserGroupController],
  providers: [UserGroupService],
})
export class UserGroupModule {}
