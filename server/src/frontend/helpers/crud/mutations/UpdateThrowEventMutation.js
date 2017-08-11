/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateThrowEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ThrowEventConnection {
                    totalCount
                }
            }
        `,
        throwevent: () => Relay.QL`
            fragment on ThrowEvent {
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
            updateThrowEvent
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateThrowEventPayload {
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
                    ThrowEventConnection(first: 0) {
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
                entity: this.props.throwevent.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedThrowEvent.id,
            
            name: this.props.updatedThrowEvent.name,
            
            key: this.props.updatedThrowEvent.key,
            
            process: this.props.updatedThrowEvent.process,
            
            nodeDef: this.props.updatedThrowEvent.nodeDef,
            
            type: this.props.updatedThrowEvent.type,
            
            state: this.props.updatedThrowEvent.state,
            
            participant: this.props.updatedThrowEvent.participant,
            
            application: this.props.updatedThrowEvent.application,
            
            processToken: this.props.updatedThrowEvent.processToken,
            
            instanceCounter: this.props.updatedThrowEvent.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedThrowEvent.id,
                
                name: this.props.updatedThrowEvent.name,
                
                key: this.props.updatedThrowEvent.key,
                
                process: this.props.updatedThrowEvent.process,
                
                nodeDef: this.props.updatedThrowEvent.nodeDef,
                
                type: this.props.updatedThrowEvent.type,
                
                state: this.props.updatedThrowEvent.state,
                
                participant: this.props.updatedThrowEvent.participant,
                
                application: this.props.updatedThrowEvent.application,
                
                processToken: this.props.updatedThrowEvent.processToken,
                
                instanceCounter: this.props.updatedThrowEvent.instanceCounter,
            }
        };
    }
}
