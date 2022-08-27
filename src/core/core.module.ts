import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import configModuleOptions from './config/config';
import { dbOptions } from './database/db.config';
@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    MongooseModule.forRootAsync(dbOptions),
  ],
  providers: [],
})
export class CoreModule {}
