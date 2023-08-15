import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Permission } from './entities/permissions.entity';
import { Repository } from 'typeorm';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { httpErrors } from 'src/exceptions';

@Injectable()
export class PermissionsService {
  constructor(
    @InjectRepository(Permission)
    private permissionsRepository: Repository<Permission>,
  ) {}
  async create(@Body() permission: CreatePermissionDto): Promise<Permission> {
    try {
      const isExistsPermission = await this.permissionsRepository.findOne({
        where: { key: permission.key },
      });
      if (!isExistsPermission) {
        throw new HttpException(
          httpErrors.PERMISSION_EXISTING,
          HttpStatus.BAD_REQUEST,
        );
      }
      return await this.permissionsRepository.save(permission);
    } catch (error) {
      throw new HttpException(
        httpErrors.PERMISSION_CREATE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<Permission[]> {
    try {
      return await this.permissionsRepository.find();
    } catch (error) {
      throw new HttpException(
        httpErrors.PERMISSION_FIND_ALL_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<Permission> {
    try {
      const permission: Permission = await this.permissionsRepository.findOne({
        where: {
          id,
        },
      });
      if (!permission) {
        throw new HttpException(
          httpErrors.PERMISSION_NOT_FOUND,
          HttpStatus.BAD_REQUEST,
        );
      }
      return permission;
    } catch (error) {
      throw new HttpException(
        httpErrors.PERMISSION_FIND_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(permission: UpdatePermissionDto): Promise<Permission> {
    try {
      await this.permissionsRepository.update(permission.id, permission);
      const updatedPermission = await this.permissionsRepository.findOne({
        where: { id: permission.id },
      });

      return updatedPermission;
    } catch (error) {
      throw new HttpException(
        httpErrors.PERMISSION_UPDATE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number) {
    try {
      const entry = await this.permissionsRepository.findOneBy({ id });
      await this.permissionsRepository.delete({ id });
      return entry;
    } catch (error) {
      throw new HttpException(
        httpErrors.PERMISSION_DELETE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
