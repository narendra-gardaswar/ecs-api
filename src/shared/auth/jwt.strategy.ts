import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserRoles } from '../../users/users.model';
import { EnvVariable } from '../../core/config/config.validation';

export class LoggedInUser {
  id: string;
  role: UserRoles;
  iat: number;
  exp: number;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get(EnvVariable.JWT_SECRET),
    });
  }

  async validate(user: LoggedInUser): Promise<LoggedInUser> {
    return user;
  }
}
