import { ConfigModuleOptions } from '@nestjs/config';
import { configValidations } from './config.validation';

const configOptions: ConfigModuleOptions = {
  isGlobal: true,
  validationSchema: configValidations,
  validationOptions: {
    abortEarly: false,
  },
};

export default configOptions;
