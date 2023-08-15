import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNumber()
  @Max(11)
  @MaxLength(255)
  groupId: number;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  @IsOptional()
  username: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  email: string;

  @ApiProperty()
  @IsString()
  @MaxLength(255)
  password: string;
}
