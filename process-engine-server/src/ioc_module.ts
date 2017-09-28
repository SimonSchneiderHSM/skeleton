import {ReservationEntityTypeService} from './reservation_entity_type_service';
import {ReservationEntity} from './reservation_entity_type';
import {PriceCalculation} from './price_calculation';
import {EntityDiscoveryTag} from '@process-engine-js/core_contracts';
import * as fs from 'fs';

//const reservationBpmn = fs.readFileSync('./reservation.bpmn', 'utf8');

function registerInContainer(container) {

  //container.registerObject('reservationProcess', reservationBpmn)
  //  .setTag('bpmn_process', 'internal')
  container.register('ReservationEntity', ReservationEntity)
    .tags(EntityDiscoveryTag);

  container.register('ReservationEntityTypeService', ReservationEntityTypeService)
    .dependencies('DatastoreService')
    .injectPromiseLazy('DatastoreService');

  container.register('PriceCalculation', PriceCalculation)
}

module.exports.registerInContainer = registerInContainer;
