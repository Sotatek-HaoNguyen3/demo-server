import { UserGroupPermissionsService } from './user-group-permissions.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserGroupPermissionDto } from './dto/create-user-group-permission.dto';
import { UserGroupPermission } from './entities/user-group-permissions.entity';
import { UpdateUserGroupPermissionDto } from './dto/update-user-group-permission.dto';

@Controller('user-group-permissions')
export class UserGroupPermissionsController {
  constructor(
    private userGroupPermissionsService: UserGroupPermissionsService,
  ) {}
  @Post()
  async create(
    @Body() userGroupPermission: CreateUserGroupPermissionDto,
  ): Promise<UserGroupPermission> {
    return await this.userGroupPermissionsService.create(userGroupPermission);
  }

  @Get()
  async findAll(): Promise<UserGroupPermission[]> {
    return await this.userGroupPermissionsService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<UserGroupPermission> {
    return this.userGroupPermissionsService.findOne(id);
  }

  @Put()
  async update(
    @Body() userGroupPermission: UpdateUserGroupPermissionDto,
  ): Promise<UserGroupPermission> {
    return this.userGroupPermissionsService.update(userGroupPermission);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<UserGroupPermission> {
    return this.userGroupPermissionsService.remove(id);
  }
}
