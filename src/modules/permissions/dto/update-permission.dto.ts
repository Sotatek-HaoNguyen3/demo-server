import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Max } from 'class-validator';
import { CreatePermissionDto } from './create-permission.dto';

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {
  @IsNotEmpty()
  @IsNumber()
  @Max(11)
  id: number;
}
