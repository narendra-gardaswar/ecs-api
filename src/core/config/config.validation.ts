import * as Joi from 'joi';

export const configValidations = Joi.object().keys({
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string()
    .equal('production', 'development')
    .default('development'),
  MONGODB_URL: Joi.string(),
  API_TOKEN: Joi.string(),
});

export enum EnvVariable {
  NODE_ENV = 'NODE_ENV',
  PORT = 'PORT',
  MONGODB_URL = 'MONGODB_URL',
  API_TOKEN = 'API_TOKEN',
}
