import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  ParseIntPipe,
  Put,
} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { Permission } from './entities/permissions.entity';

@Controller('permissions')
export class PermissionsController {
  constructor(private permissionsService: PermissionsService) {}
  @Post()
  async create(
    @Body() createPermissionDto: CreatePermissionDto,
  ): Promise<Permission> {
    return await this.permissionsService.create(createPermissionDto);
  }

  @Get()
  async findAll(): Promise<Permission[]> {
    return await this.permissionsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Permission> {
    return await this.permissionsService.findOne(id);
  }

  @Put()
  async update(
    @Body() updatePermissionsDto: UpdatePermissionDto,
  ): Promise<Permission> {
    return await this.permissionsService.update(updatePermissionsDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<Permission> {
    return await this.permissionsService.remove(id);
  }
}
