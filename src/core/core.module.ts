import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configModuleOptions from './config/config';
@Module({
  imports: [ConfigModule.forRoot(configModuleOptions)],
  providers: [],
})
export class CoreModule {}
