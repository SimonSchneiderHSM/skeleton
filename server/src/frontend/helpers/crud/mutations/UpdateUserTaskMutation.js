/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateUserTaskMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                UserTaskConnection {
                    totalCount
                }
            }
        `,
        usertask: () => Relay.QL`
            fragment on UserTask {
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
            updateUserTask
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateUserTaskPayload {
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
                    UserTaskConnection(first: 0) {
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
                entity: this.props.usertask.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedUserTask.id,
            
            name: this.props.updatedUserTask.name,
            
            key: this.props.updatedUserTask.key,
            
            process: this.props.updatedUserTask.process,
            
            nodeDef: this.props.updatedUserTask.nodeDef,
            
            type: this.props.updatedUserTask.type,
            
            state: this.props.updatedUserTask.state,
            
            participant: this.props.updatedUserTask.participant,
            
            application: this.props.updatedUserTask.application,
            
            processToken: this.props.updatedUserTask.processToken,
            
            instanceCounter: this.props.updatedUserTask.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedUserTask.id,
                
                name: this.props.updatedUserTask.name,
                
                key: this.props.updatedUserTask.key,
                
                process: this.props.updatedUserTask.process,
                
                nodeDef: this.props.updatedUserTask.nodeDef,
                
                type: this.props.updatedUserTask.type,
                
                state: this.props.updatedUserTask.state,
                
                participant: this.props.updatedUserTask.participant,
                
                application: this.props.updatedUserTask.application,
                
                processToken: this.props.updatedUserTask.processToken,
                
                instanceCounter: this.props.updatedUserTask.instanceCounter,
            }
        };
    }
}
