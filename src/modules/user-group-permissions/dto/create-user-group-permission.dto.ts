import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
} from 'class-validator';

export class CreateUserGroupPermissionDto {
  @ApiProperty()
  @IsNumber()
  @Max(11)
  @IsNotEmpty()
  userGroupId: number;

  @ApiProperty()
  @IsNumber()
  @Max(11)
  @IsNotEmpty()
  permissionId: number;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description: string;
}
