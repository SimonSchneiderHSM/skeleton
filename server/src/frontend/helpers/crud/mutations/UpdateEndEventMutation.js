/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateEndEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                EndEventConnection {
                    totalCount
                }
            }
        `,
        endevent: () => Relay.QL`
            fragment on EndEvent {
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
            updateEndEvent
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateEndEventPayload {
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
                    EndEventConnection(first: 0) {
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
                entity: this.props.endevent.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedEndEvent.id,
            
            name: this.props.updatedEndEvent.name,
            
            key: this.props.updatedEndEvent.key,
            
            process: this.props.updatedEndEvent.process,
            
            nodeDef: this.props.updatedEndEvent.nodeDef,
            
            type: this.props.updatedEndEvent.type,
            
            state: this.props.updatedEndEvent.state,
            
            participant: this.props.updatedEndEvent.participant,
            
            application: this.props.updatedEndEvent.application,
            
            processToken: this.props.updatedEndEvent.processToken,
            
            instanceCounter: this.props.updatedEndEvent.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedEndEvent.id,
                
                name: this.props.updatedEndEvent.name,
                
                key: this.props.updatedEndEvent.key,
                
                process: this.props.updatedEndEvent.process,
                
                nodeDef: this.props.updatedEndEvent.nodeDef,
                
                type: this.props.updatedEndEvent.type,
                
                state: this.props.updatedEndEvent.state,
                
                participant: this.props.updatedEndEvent.participant,
                
                application: this.props.updatedEndEvent.application,
                
                processToken: this.props.updatedEndEvent.processToken,
                
                instanceCounter: this.props.updatedEndEvent.instanceCounter,
            }
        };
    }
}
