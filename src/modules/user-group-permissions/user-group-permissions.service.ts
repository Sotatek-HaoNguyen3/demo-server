import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateUserGroupPermissionDto } from './dto/create-user-group-permission.dto';
import { UserGroupPermission } from './entities/user-group-permissions.entity';
import { UpdateUserGroupPermissionDto } from './dto/update-user-group-permission.dto';

import { httpErrors } from 'src/exceptions';

@Injectable()
export class UserGroupPermissionsService {
  constructor(
    @InjectRepository(UserGroupPermission)
    private userGroupPermissionRepository: Repository<UserGroupPermission>,
  ) {}

  async create(
    userGroupPermission: CreateUserGroupPermissionDto,
  ): Promise<UserGroupPermission> {
    try {
      return await this.userGroupPermissionRepository.save(userGroupPermission);
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_PERMISSION_CREATE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<UserGroupPermission[]> {
    try {
      return await this.userGroupPermissionRepository.find();
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_PERMISSION_FIND_ALL_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<UserGroupPermission> {
    try {
      return await this.userGroupPermissionRepository.findOne({
        where: { id },
      });
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_PERMISSION_FIND_ONE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(
    userGroupPermission: UpdateUserGroupPermissionDto,
  ): Promise<UserGroupPermission> {
    try {
      await this.userGroupPermissionRepository.update(
        userGroupPermission.id,
        userGroupPermission,
      );
      return await this.userGroupPermissionRepository.findOne({
        where: { id: userGroupPermission.id },
      });
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_PERMISSION_UPDATE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number): Promise<UserGroupPermission> {
    try {
      const removedUserGroupPermissions =
        await this.userGroupPermissionRepository.findOne({ where: { id } });
      await this.userGroupPermissionRepository.delete(id);
      return removedUserGroupPermissions;
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_PERMISSION_DELETE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
