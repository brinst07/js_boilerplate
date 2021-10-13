import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class UserDto {
  idx: number;
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @Matches(/^[a-zA-Z0-9]*$/)
  password: string;
  @IsEmail()
  @IsNotEmpty()
  email: string;
  createdAt: Date;
  lastLoginAt: Date;
}
