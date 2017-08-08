'use strict';

const ReservationEntity = require('./dist/commonjs').ReservationEntity;
const ReservationEntityTypeService = require('./dist/commonjs').ReservationEntityTypeService;
const PriceCalculation = require('./dist/commonjs').PriceCalculation;

const entityDiscoveryTag = require('@process-engine-js/core_contracts').EntityDiscoveryTag;

const fs = require('fs');
const path = require('path');

const reservationFile = 'reservation.bpmn';
const reservationPath = path.join(__dirname, 'bpmn/' + reservationFile);
const reservationBpmn = fs.readFileSync(reservationPath, 'utf8');

const exampleFile = 'example.bpmn';
const examplePath = path.join(__dirname, 'bpmn/' + exampleFile);
const exampleBpmn = fs.readFileSync(examplePath, 'utf8');

function registerInContainer(container) {

  container.registerObject(reservationFile, reservationBpmn)
    .setTag('bpmn_process', 'internal') // category: internal
    .setTag('module', 'demo') // the source module
    .setTag('path', reservationPath);   // the file path

  container.registerObject(exampleFile, exampleBpmn)
    .setTag('bpmn_process', 'internal') // category: internal
    .setTag('module', 'demo') // the source module
    .setTag('path', examplePath);   // the file path


  container.register('ReservationEntity', ReservationEntity)
    .tags(entityDiscoveryTag);

  container.register('ReservationEntityTypeService', ReservationEntityTypeService)
    .dependencies('DatastoreService')
    .injectLazy('DatastoreService');

  container.register('PriceCalculation', PriceCalculation)
    .tags('helper');
}

module.exports.registerInContainer = registerInContainer;
