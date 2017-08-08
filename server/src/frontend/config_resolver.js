import { config } from './static/index';
import { Resolver } from 'addict-ioc';

export class ConfigResolver extends Resolver {

  resolveConfig(configNamespace) {

    const configType = typeof configNamespace;

    if (configType === 'undefined') {
      return undefined;
    }
    if (configType === 'object') {
      return configNamespace;
    }
    if (configType === 'function') {
      return configNamespace();
    }

    const segments = configNamespace.split(':');

    let currentNode = config;

    for(let i = 0; i < segments.length; i++) {
      currentNode = currentNode[segments[i]];
    }

    return currentNode;
  }
}