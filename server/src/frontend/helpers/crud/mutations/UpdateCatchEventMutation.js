/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateCatchEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                CatchEventConnection {
                    totalCount
                }
            }
        `,
        catchevent: () => Relay.QL`
            fragment on CatchEvent {
                id,
                name,
                key,
                process,
                nodeDef,
                type,
                state,
                participant,
                application,
                processToken,
                instanceCounter,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateCatchEvent
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateCatchEventPayload {
                entity {
                    id,
                    name,
                    key,
                    process,
                    nodeDef,
                    type,
                    state,
                    participant,
                    application,
                    processToken,
                    instanceCounter,
                },
                catalog {
                    id,
                    CatchEventConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                process,
                                nodeDef,
                                type,
                                state,
                                participant,
                                application,
                                processToken,
                                instanceCounter,
                            }
                        },
                        totalCount
                    }
                }
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                catalog: this.props.catalog.id,
                entity: this.props.catchevent.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedCatchEvent.id,
            
            name: this.props.updatedCatchEvent.name,
            
            key: this.props.updatedCatchEvent.key,
            
            process: this.props.updatedCatchEvent.process,
            
            nodeDef: this.props.updatedCatchEvent.nodeDef,
            
            type: this.props.updatedCatchEvent.type,
            
            state: this.props.updatedCatchEvent.state,
            
            participant: this.props.updatedCatchEvent.participant,
            
            application: this.props.updatedCatchEvent.application,
            
            processToken: this.props.updatedCatchEvent.processToken,
            
            instanceCounter: this.props.updatedCatchEvent.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedCatchEvent.id,
                
                name: this.props.updatedCatchEvent.name,
                
                key: this.props.updatedCatchEvent.key,
                
                process: this.props.updatedCatchEvent.process,
                
                nodeDef: this.props.updatedCatchEvent.nodeDef,
                
                type: this.props.updatedCatchEvent.type,
                
                state: this.props.updatedCatchEvent.state,
                
                participant: this.props.updatedCatchEvent.participant,
                
                application: this.props.updatedCatchEvent.application,
                
                processToken: this.props.updatedCatchEvent.processToken,
                
                instanceCounter: this.props.updatedCatchEvent.instanceCounter,
            }
        };
    }
}
