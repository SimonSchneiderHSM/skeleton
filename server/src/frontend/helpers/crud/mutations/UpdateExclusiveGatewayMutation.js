/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateExclusiveGatewayMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ExclusiveGatewayConnection {
                    totalCount
                }
            }
        `,
        exclusivegateway: () => Relay.QL`
            fragment on ExclusiveGateway {
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
                follow,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateExclusiveGateway
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateExclusiveGatewayPayload {
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
                    follow,
                },
                catalog {
                    id,
                    ExclusiveGatewayConnection(first: 0) {
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
                                follow,
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
                entity: this.props.exclusivegateway.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedExclusiveGateway.id,
            
            name: this.props.updatedExclusiveGateway.name,
            
            key: this.props.updatedExclusiveGateway.key,
            
            process: this.props.updatedExclusiveGateway.process,
            
            nodeDef: this.props.updatedExclusiveGateway.nodeDef,
            
            type: this.props.updatedExclusiveGateway.type,
            
            state: this.props.updatedExclusiveGateway.state,
            
            participant: this.props.updatedExclusiveGateway.participant,
            
            application: this.props.updatedExclusiveGateway.application,
            
            processToken: this.props.updatedExclusiveGateway.processToken,
            
            instanceCounter: this.props.updatedExclusiveGateway.instanceCounter,
            
            follow: this.props.updatedExclusiveGateway.follow,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedExclusiveGateway.id,
                
                name: this.props.updatedExclusiveGateway.name,
                
                key: this.props.updatedExclusiveGateway.key,
                
                process: this.props.updatedExclusiveGateway.process,
                
                nodeDef: this.props.updatedExclusiveGateway.nodeDef,
                
                type: this.props.updatedExclusiveGateway.type,
                
                state: this.props.updatedExclusiveGateway.state,
                
                participant: this.props.updatedExclusiveGateway.participant,
                
                application: this.props.updatedExclusiveGateway.application,
                
                processToken: this.props.updatedExclusiveGateway.processToken,
                
                instanceCounter: this.props.updatedExclusiveGateway.instanceCounter,
                
                follow: this.props.updatedExclusiveGateway.follow,
            }
        };
    }
}
