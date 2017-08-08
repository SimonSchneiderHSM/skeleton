/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                EventConnection {
                    totalCount
                }
            }
        `,
        event: () => Relay.QL`
            fragment on Event {
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
            updateEvent
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateEventPayload {
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
                    EventConnection(first: 0) {
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
                entity: this.props.event.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedEvent.id,
            
            name: this.props.updatedEvent.name,
            
            key: this.props.updatedEvent.key,
            
            process: this.props.updatedEvent.process,
            
            nodeDef: this.props.updatedEvent.nodeDef,
            
            type: this.props.updatedEvent.type,
            
            state: this.props.updatedEvent.state,
            
            participant: this.props.updatedEvent.participant,
            
            application: this.props.updatedEvent.application,
            
            processToken: this.props.updatedEvent.processToken,
            
            instanceCounter: this.props.updatedEvent.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedEvent.id,
                
                name: this.props.updatedEvent.name,
                
                key: this.props.updatedEvent.key,
                
                process: this.props.updatedEvent.process,
                
                nodeDef: this.props.updatedEvent.nodeDef,
                
                type: this.props.updatedEvent.type,
                
                state: this.props.updatedEvent.state,
                
                participant: this.props.updatedEvent.participant,
                
                application: this.props.updatedEvent.application,
                
                processToken: this.props.updatedEvent.processToken,
                
                instanceCounter: this.props.updatedEvent.instanceCounter,
            }
        };
    }
}
