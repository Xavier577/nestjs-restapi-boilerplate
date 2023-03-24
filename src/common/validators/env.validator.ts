import * as Joi from 'joi';

export default Joi.object({
  PORT: Joi.number().default(8000),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'staging')
    .default('development'),

  DATABASE_URL: Joi.string().required(),
  APP_SESSION_SECRET: Joi.string().required(),

  REDIS_PORT: Joi.number().default(6379),
  REDIS_HOST: Joi.string().default('127.0.0.1'),

  ADMINJS_ROUTE: Joi.string().when('NODE_ENV', {
    is: Joi.string().valid('development'),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  ADMINJS_COOKIE_NAME: Joi.string().when('NODE_ENV', {
    is: Joi.string().valid('development'),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  ADMINJS_COOKIE_SECRET: Joi.string().when('NODE_ENV', {
    is: Joi.string().valid('development'),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),

  SWAGGER_ROUTE: Joi.string().default('/api/docs'),

  DEFAULT_ADMIN_USERNAME: Joi.string().when('NODE_ENV', {
    is: Joi.string().valid('development'),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
  DEFAULT_ADMIN_PASSWORD: Joi.string().when('NODE_ENV', {
    is: Joi.string().valid('development'),
    then: Joi.optional(),
    otherwise: Joi.required(),
  }),
});
