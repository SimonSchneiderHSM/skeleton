'use strict';

const {
  ReservationEntityTypeService,
  ReservationEntity,
  PriceCalculation
} = require('./dist/commonjs');

const entityDiscoveryTag = require('@process-engine-js/core_contracts').EntityDiscoveryTag;

const fs = require('fs');
const path = require('path');
const reservationBpmn = fs.readFileSync(path.join('bpmn', 'reservation.bpmn'), 'utf8');

function registerInContainer(container) {

  container.registerObject('reservationProcess', reservationBpmn)
    .setTag('bpmn_process', 'internal')

  container.register('ReservationEntity', ReservationEntity)
    .tags(entityDiscoveryTag);

  container.register('ReservationEntityTypeService', ReservationEntityTypeService)
    .dependencies('DatastoreService')
    .injectPromiseLazy('DatastoreService');

  container.register('PriceCalculation', PriceCalculation);
}

module.exports.registerInContainer = registerInContainer;
