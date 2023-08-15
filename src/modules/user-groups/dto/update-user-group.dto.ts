import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, Max } from 'class-validator';
import { CreateUserGroupDto } from './create-user-group.dto';

export class UpdateUserGroupDto extends PartialType(CreateUserGroupDto) {
  @IsNumber()
  @Max(11)
  @IsNotEmpty()
  id: number;

  @ApiProperty({ required: false })
  @IsNumber()
  @Max(11)
  @IsOptional()
  updatedBy: number;
}
