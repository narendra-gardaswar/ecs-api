import { Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './common/auth/auth.module';
import { UtilService } from './common/services/util.service';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CoreModule, UsersModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, Logger, UtilService],
})
export class AppModule {}
