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
import { UpdateUserGroupDto } from './dto/update-user-group.dto';
import { UserGroupService } from './user-group.service';
import { CreateUserGroupDto } from './dto/create-user-group.dto';
import { UserGroup } from './entities/user-groups.entity';

@Controller('user-group')
export class UserGroupController {
  constructor(private userGroupService: UserGroupService) {}
  @Post()
  async create(@Body() userGroup: CreateUserGroupDto): Promise<UserGroup> {
    return await this.userGroupService.create(userGroup);
  }

  @Get()
  async findAll(): Promise<UserGroup[]> {
    return await this.userGroupService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserGroup> {
    return await this.userGroupService.findOne(id);
  }

  @Put()
  async update(@Body() userGroup: UpdateUserGroupDto): Promise<UserGroup> {
    return await this.userGroupService.update(userGroup);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<UserGroup> {
    return await this.userGroupService.remove(id);
  }
}
