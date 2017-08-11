/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateBoundaryEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                BoundaryEventConnection {
                    totalCount
                }
            }
        `,
        boundaryevent: () => Relay.QL`
            fragment on BoundaryEvent {
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
            updateBoundaryEvent
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateBoundaryEventPayload {
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
                    BoundaryEventConnection(first: 0) {
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
                entity: this.props.boundaryevent.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedBoundaryEvent.id,
            
            name: this.props.updatedBoundaryEvent.name,
            
            key: this.props.updatedBoundaryEvent.key,
            
            process: this.props.updatedBoundaryEvent.process,
            
            nodeDef: this.props.updatedBoundaryEvent.nodeDef,
            
            type: this.props.updatedBoundaryEvent.type,
            
            state: this.props.updatedBoundaryEvent.state,
            
            participant: this.props.updatedBoundaryEvent.participant,
            
            application: this.props.updatedBoundaryEvent.application,
            
            processToken: this.props.updatedBoundaryEvent.processToken,
            
            instanceCounter: this.props.updatedBoundaryEvent.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedBoundaryEvent.id,
                
                name: this.props.updatedBoundaryEvent.name,
                
                key: this.props.updatedBoundaryEvent.key,
                
                process: this.props.updatedBoundaryEvent.process,
                
                nodeDef: this.props.updatedBoundaryEvent.nodeDef,
                
                type: this.props.updatedBoundaryEvent.type,
                
                state: this.props.updatedBoundaryEvent.state,
                
                participant: this.props.updatedBoundaryEvent.participant,
                
                application: this.props.updatedBoundaryEvent.application,
                
                processToken: this.props.updatedBoundaryEvent.processToken,
                
                instanceCounter: this.props.updatedBoundaryEvent.instanceCounter,
            }
        };
    }
}
