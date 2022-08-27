import { ConfigService } from '@nestjs/config';
import {
  MongooseModuleAsyncOptions,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { set } from 'mongoose';

export const dbOptions: MongooseModuleAsyncOptions = {
  useFactory: async (configService: ConfigService) => {
    const env = configService.get<string>('NODE_ENV') as string;
    let dbENVVariable = 'MONGODB_URL_PRODUCTION';
    if (env !== 'production') {
      dbENVVariable = 'MONGODB_URL_STAGING';
      set('debug', true);
    }
    const uri = configService.get<string>(dbENVVariable) as string;
    const options: MongooseModuleOptions = {
      uri,
    };
    return options;
  },
  inject: [ConfigService],
};
