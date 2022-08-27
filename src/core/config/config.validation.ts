import * as Joi from 'joi';

export const configValidations = Joi.object().keys({
  PORT: Joi.number().default(3000),
  NODE_ENV: Joi.string()
    .equal('production', 'development')
    .default('development'),
});
