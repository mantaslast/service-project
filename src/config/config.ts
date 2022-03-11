import nconf from 'nconf';

nconf.env().argv();

nconf.defaults({
  port: 3000
});

nconf.required([
  'PORT',
  'DB_USERNAME',
  'DB_PASSWORD',
  'DB_HOST',
  'DB_NAME',
  'APP_NAME'
]);

const config = {
  app: {
    name: nconf.get('APP_NAME'),
    port: nconf.get('PORT')
  },
  database: {
    username: nconf.get('DB_USERNAME'),
    password: nconf.get('DB_PASSWORD'),
    host: nconf.get('DB_HOST'),
    name: nconf.get('DB_NAME')
  }
};

export default config;
