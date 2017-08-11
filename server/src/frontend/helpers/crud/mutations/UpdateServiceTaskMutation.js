/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateServiceTaskMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ServiceTaskConnection {
                    totalCount
                }
            }
        `,
        servicetask: () => Relay.QL`
            fragment on ServiceTask {
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
            updateServiceTask
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateServiceTaskPayload {
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
                    ServiceTaskConnection(first: 0) {
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
                entity: this.props.servicetask.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedServiceTask.id,
            
            name: this.props.updatedServiceTask.name,
            
            key: this.props.updatedServiceTask.key,
            
            process: this.props.updatedServiceTask.process,
            
            nodeDef: this.props.updatedServiceTask.nodeDef,
            
            type: this.props.updatedServiceTask.type,
            
            state: this.props.updatedServiceTask.state,
            
            participant: this.props.updatedServiceTask.participant,
            
            application: this.props.updatedServiceTask.application,
            
            processToken: this.props.updatedServiceTask.processToken,
            
            instanceCounter: this.props.updatedServiceTask.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedServiceTask.id,
                
                name: this.props.updatedServiceTask.name,
                
                key: this.props.updatedServiceTask.key,
                
                process: this.props.updatedServiceTask.process,
                
                nodeDef: this.props.updatedServiceTask.nodeDef,
                
                type: this.props.updatedServiceTask.type,
                
                state: this.props.updatedServiceTask.state,
                
                participant: this.props.updatedServiceTask.participant,
                
                application: this.props.updatedServiceTask.application,
                
                processToken: this.props.updatedServiceTask.processToken,
                
                instanceCounter: this.props.updatedServiceTask.instanceCounter,
            }
        };
    }
}
