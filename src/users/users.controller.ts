import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/get/:id')
  async getUser(@Param('id') userId: string) {
    return this.usersService.getUserById(userId);
  }
}
