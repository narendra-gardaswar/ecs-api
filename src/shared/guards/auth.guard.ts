import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard as Guard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends Guard('jwt') {
  canActivate(context: ExecutionContext) {
    // Add your custom authentication logic here
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }
}
