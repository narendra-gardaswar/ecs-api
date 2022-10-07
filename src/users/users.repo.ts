import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './users.model';

@Injectable()
export class UsersRepo {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async saveUser(saveUserData: User): Promise<User> {
    const user = new this.userModel(saveUserData);
    return user.save();
  }

  async getUserById(userId: string): Promise<User | null> {
    return this.userModel.findById(userId);
  }
}
