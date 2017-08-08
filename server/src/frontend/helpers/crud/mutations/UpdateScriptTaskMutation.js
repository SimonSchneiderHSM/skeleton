/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateScriptTaskMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ScriptTaskConnection {
                    totalCount
                }
            }
        `,
        scripttask: () => Relay.QL`
            fragment on ScriptTask {
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
                script,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateScriptTask
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateScriptTaskPayload {
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
                    script,
                },
                catalog {
                    id,
                    ScriptTaskConnection(first: 0) {
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
                                script,
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
                entity: this.props.scripttask.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedScriptTask.id,
            
            name: this.props.updatedScriptTask.name,
            
            key: this.props.updatedScriptTask.key,
            
            process: this.props.updatedScriptTask.process,
            
            nodeDef: this.props.updatedScriptTask.nodeDef,
            
            type: this.props.updatedScriptTask.type,
            
            state: this.props.updatedScriptTask.state,
            
            participant: this.props.updatedScriptTask.participant,
            
            application: this.props.updatedScriptTask.application,
            
            processToken: this.props.updatedScriptTask.processToken,
            
            instanceCounter: this.props.updatedScriptTask.instanceCounter,
            
            script: this.props.updatedScriptTask.script,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedScriptTask.id,
                
                name: this.props.updatedScriptTask.name,
                
                key: this.props.updatedScriptTask.key,
                
                process: this.props.updatedScriptTask.process,
                
                nodeDef: this.props.updatedScriptTask.nodeDef,
                
                type: this.props.updatedScriptTask.type,
                
                state: this.props.updatedScriptTask.state,
                
                participant: this.props.updatedScriptTask.participant,
                
                application: this.props.updatedScriptTask.application,
                
                processToken: this.props.updatedScriptTask.processToken,
                
                instanceCounter: this.props.updatedScriptTask.instanceCounter,
                
                script: this.props.updatedScriptTask.script,
            }
        };
    }
}
