import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { CommonResponse } from '../shared/models/util.model';
import { UserDTO } from './users.dtos';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  private readonly logger = new Logger(UsersController.name);
  constructor(private readonly usersService: UsersService) {}

  @Get('/get/:id')
  async getUser(@Param('id') userId: string) {
    return this.usersService.getUserById(userId);
  }

  @Post('/signup')
  async signUp(@Body() userData: UserDTO): Promise<CommonResponse> {
    try {
      return this.usersService.signUp(userData);
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}
