import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserGroup } from './entities/user-groups.entity';
import { Repository } from 'typeorm';
import { httpErrors } from 'src/exceptions';
import { UpdateUserGroupDto } from './dto/update-user-group.dto';
import { CreateUserGroupDto } from './dto/create-user-group.dto';

@Injectable()
export class UserGroupService {
  constructor(
    @InjectRepository(UserGroup)
    private userGroupRepository: Repository<UserGroup>,
  ) {}
  async create(userGroup: CreateUserGroupDto): Promise<UserGroup> {
    try {
      if (!userGroup) {
        throw new HttpException(
          httpErrors.USER_GROUP_NOT_FOUND,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
      return await this.userGroupRepository.save(userGroup);
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_CREATE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<UserGroup[]> {
    try {
      return await this.userGroupRepository.find();
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_FIND_ALL_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findOne(id: number): Promise<UserGroup> {
    try {
      return await this.userGroupRepository.findOne({ where: { id } });
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_FIND_ONE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async update(userGroup: UpdateUserGroupDto): Promise<UserGroup> {
    try {
      // NOTE: updated_by get by jwt
      await this.userGroupRepository.update(userGroup.id, userGroup);
      return await this.userGroupRepository.findOne({
        where: { id: userGroup.id },
      });
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_UPDATE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async remove(id: number): Promise<UserGroup> {
    try {
      const removedUserGroup: UserGroup =
        await this.userGroupRepository.findOne({
          where: { id },
        });
      await this.userGroupRepository.delete({ id });
      return removedUserGroup;
    } catch (error) {
      throw new HttpException(
        httpErrors.USER_GROUP_DELETE_FAILURE,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
