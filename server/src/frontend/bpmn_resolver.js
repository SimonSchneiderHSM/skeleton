import { Resolver } from 'addict-ioc';

export class BpmnResolver extends Resolver {

  resolveObject(container, registration) {

    switch(registration.settings.key) {
      case 'reservation.bpmn':
        return require('../backend/modules/demo-backend/bpmn/reservation.bpmn');
      case 'example.bpmn':
        return require('../backend/modules/demo-backend/bpmn/example.bpmn');
    }
  }
}