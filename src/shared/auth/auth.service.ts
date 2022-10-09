import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { EnvVariable } from '../../core/config/config.validation';
@Injectable()
export class AuthService {
  constructor(private readonly configService: ConfigService) {}

  hashPassword(password: string) {
    const saltRounds = 10;
    const passwordHash = bcrypt.hashSync(password, saltRounds);
    return passwordHash;
  }

  compareHash(data: string, hash: string) {
    return bcrypt.compareSync(data, hash);
  }

  validateApiToken(apiKey: string) {
    const token = this.configService.get(EnvVariable.API_TOKEN);
    if (!apiKey || String(token) !== String(apiKey)) {
      throw new ForbiddenException();
    }
    return true;
  }
}
