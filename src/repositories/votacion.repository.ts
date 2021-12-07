import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {PruebavotoDataSource} from '../datasources';
import {Votacion, VotacionRelations} from '../models';

export class VotacionRepository extends DefaultCrudRepository<
  Votacion,
  typeof Votacion.prototype.id,
  VotacionRelations
> {
  constructor(
    @inject('datasources.pruebavoto') dataSource: PruebavotoDataSource,
  ) {
    super(Votacion, dataSource);
  }
}
