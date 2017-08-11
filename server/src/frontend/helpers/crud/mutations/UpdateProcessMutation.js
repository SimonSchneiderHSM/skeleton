/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateProcessMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ProcessConnection {
                    totalCount
                }
            }
        `,
        process: () => Relay.QL`
            fragment on Process {
                id,
                name,
                key,
                status,
                processDef,
                isSubProcess,
                callerId,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateProcess
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateProcessPayload {
                entity {
                    id,
                    name,
                    key,
                    status,
                    processDef,
                    isSubProcess,
                    callerId,
                },
                catalog {
                    id,
                    ProcessConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                status,
                                processDef,
                                isSubProcess,
                                callerId,
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
                entity: this.props.process.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedProcess.id,
            
            name: this.props.updatedProcess.name,
            
            key: this.props.updatedProcess.key,
            
            status: this.props.updatedProcess.status,
            
            processDef: this.props.updatedProcess.processDef,
            
            isSubProcess: this.props.updatedProcess.isSubProcess,
            
            callerId: this.props.updatedProcess.callerId,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedProcess.id,
                
                name: this.props.updatedProcess.name,
                
                key: this.props.updatedProcess.key,
                
                status: this.props.updatedProcess.status,
                
                processDef: this.props.updatedProcess.processDef,
                
                isSubProcess: this.props.updatedProcess.isSubProcess,
                
                callerId: this.props.updatedProcess.callerId,
            }
        };
    }
}
