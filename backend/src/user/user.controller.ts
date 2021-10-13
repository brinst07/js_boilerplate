import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './userDto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/signIn')
  signIn(@Body() userDto: UserDto): Promise<string> {
    return this.userService.signIn(userDto);
  }

  @Post('/signUp')
  signUp(@Body(ValidationPipe) userDto: UserDto) {
    return this.userService.signUp(userDto);
  }

  @Post('/authTest')
  @UseGuards(AuthGuard())
  authTest(@Req() req) {
    console.log(req);
  }
}
