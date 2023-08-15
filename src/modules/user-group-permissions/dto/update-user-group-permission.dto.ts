import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Max } from 'class-validator';
import { CreateUserGroupPermissionDto } from './create-user-group-permission.dto';

export class UpdateUserGroupPermissionDto extends PartialType(
  CreateUserGroupPermissionDto,
) {
  @IsNumber()
  @Max(11)
  @IsNotEmpty()
  id: number;
}
