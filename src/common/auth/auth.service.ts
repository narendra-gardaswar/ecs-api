import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  private readonly accessTokenExpiration = 1 * 86400;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  hashPassword(password: string) {
    const saltRounds = 10;
    const passwordHash = bcrypt.hashSync(password, saltRounds);
    return passwordHash;
  }

  compareHash(data: string, hash: string) {
    return bcrypt.compareSync(data, hash);
  }
}
