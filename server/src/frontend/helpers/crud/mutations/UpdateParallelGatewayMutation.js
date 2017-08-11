/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateParallelGatewayMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ParallelGatewayConnection {
                    totalCount
                }
            }
        `,
        parallelgateway: () => Relay.QL`
            fragment on ParallelGateway {
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
                parallelType,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateParallelGateway
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateParallelGatewayPayload {
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
                    parallelType,
                },
                catalog {
                    id,
                    ParallelGatewayConnection(first: 0) {
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
                                parallelType,
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
                entity: this.props.parallelgateway.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedParallelGateway.id,
            
            name: this.props.updatedParallelGateway.name,
            
            key: this.props.updatedParallelGateway.key,
            
            process: this.props.updatedParallelGateway.process,
            
            nodeDef: this.props.updatedParallelGateway.nodeDef,
            
            type: this.props.updatedParallelGateway.type,
            
            state: this.props.updatedParallelGateway.state,
            
            participant: this.props.updatedParallelGateway.participant,
            
            application: this.props.updatedParallelGateway.application,
            
            processToken: this.props.updatedParallelGateway.processToken,
            
            instanceCounter: this.props.updatedParallelGateway.instanceCounter,
            
            parallelType: this.props.updatedParallelGateway.parallelType,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedParallelGateway.id,
                
                name: this.props.updatedParallelGateway.name,
                
                key: this.props.updatedParallelGateway.key,
                
                process: this.props.updatedParallelGateway.process,
                
                nodeDef: this.props.updatedParallelGateway.nodeDef,
                
                type: this.props.updatedParallelGateway.type,
                
                state: this.props.updatedParallelGateway.state,
                
                participant: this.props.updatedParallelGateway.participant,
                
                application: this.props.updatedParallelGateway.application,
                
                processToken: this.props.updatedParallelGateway.processToken,
                
                instanceCounter: this.props.updatedParallelGateway.instanceCounter,
                
                parallelType: this.props.updatedParallelGateway.parallelType,
            }
        };
    }
}
