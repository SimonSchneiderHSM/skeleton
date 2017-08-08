/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateNodeInstanceMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                NodeInstanceConnection {
                    totalCount
                }
            }
        `,
        nodeinstance: () => Relay.QL`
            fragment on NodeInstance {
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
            updateNodeInstance
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateNodeInstancePayload {
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
                    NodeInstanceConnection(first: 0) {
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
                entity: this.props.nodeinstance.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedNodeInstance.id,
            
            name: this.props.updatedNodeInstance.name,
            
            key: this.props.updatedNodeInstance.key,
            
            process: this.props.updatedNodeInstance.process,
            
            nodeDef: this.props.updatedNodeInstance.nodeDef,
            
            type: this.props.updatedNodeInstance.type,
            
            state: this.props.updatedNodeInstance.state,
            
            participant: this.props.updatedNodeInstance.participant,
            
            application: this.props.updatedNodeInstance.application,
            
            processToken: this.props.updatedNodeInstance.processToken,
            
            instanceCounter: this.props.updatedNodeInstance.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedNodeInstance.id,
                
                name: this.props.updatedNodeInstance.name,
                
                key: this.props.updatedNodeInstance.key,
                
                process: this.props.updatedNodeInstance.process,
                
                nodeDef: this.props.updatedNodeInstance.nodeDef,
                
                type: this.props.updatedNodeInstance.type,
                
                state: this.props.updatedNodeInstance.state,
                
                participant: this.props.updatedNodeInstance.participant,
                
                application: this.props.updatedNodeInstance.application,
                
                processToken: this.props.updatedNodeInstance.processToken,
                
                instanceCounter: this.props.updatedNodeInstance.instanceCounter,
            }
        };
    }
}
