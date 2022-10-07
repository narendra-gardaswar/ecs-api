import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './users.model';
import { UsersRepo } from './users.repo';

@Injectable()
export class UsersService {
  constructor(private readonly userRepo: UsersRepo) {}

  async getUserById(userId: string): Promise<User> {
    const user = await this.userRepo.getUserById(userId);
    if (!user) {
      throw new NotFoundException(`user not found`);
    }
    return user;
  }
}
