/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateStartEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                StartEventConnection {
                    totalCount
                }
            }
        `,
        startevent: () => Relay.QL`
            fragment on StartEvent {
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
            updateStartEvent
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateStartEventPayload {
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
                    StartEventConnection(first: 0) {
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
                entity: this.props.startevent.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedStartEvent.id,
            
            name: this.props.updatedStartEvent.name,
            
            key: this.props.updatedStartEvent.key,
            
            process: this.props.updatedStartEvent.process,
            
            nodeDef: this.props.updatedStartEvent.nodeDef,
            
            type: this.props.updatedStartEvent.type,
            
            state: this.props.updatedStartEvent.state,
            
            participant: this.props.updatedStartEvent.participant,
            
            application: this.props.updatedStartEvent.application,
            
            processToken: this.props.updatedStartEvent.processToken,
            
            instanceCounter: this.props.updatedStartEvent.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedStartEvent.id,
                
                name: this.props.updatedStartEvent.name,
                
                key: this.props.updatedStartEvent.key,
                
                process: this.props.updatedStartEvent.process,
                
                nodeDef: this.props.updatedStartEvent.nodeDef,
                
                type: this.props.updatedStartEvent.type,
                
                state: this.props.updatedStartEvent.state,
                
                participant: this.props.updatedStartEvent.participant,
                
                application: this.props.updatedStartEvent.application,
                
                processToken: this.props.updatedStartEvent.processToken,
                
                instanceCounter: this.props.updatedStartEvent.instanceCounter,
            }
        };
    }
}
