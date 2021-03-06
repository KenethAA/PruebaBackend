import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'pruebavoto',
  connector: 'mongodb',
  url: 'mongodb+srv://KenethAA:kenagui@cluster0.czebo.mongodb.net/pruebavoto',
  host: 'cluster0.czebo.mongodb.net',
  port: 27017,
  user: 'KenethAA',
  password: 'kenagui',
  database: 'pruebavoto',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class PruebavotoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'pruebavoto';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.pruebavoto', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
