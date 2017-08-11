/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateSubprocessInternalMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                SubprocessInternalConnection {
                    totalCount
                }
            }
        `,
        subprocessinternal: () => Relay.QL`
            fragment on SubprocessInternal {
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
            updateSubprocessInternal
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateSubprocessInternalPayload {
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
                    SubprocessInternalConnection(first: 0) {
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
                entity: this.props.subprocessinternal.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedSubprocessInternal.id,
            
            name: this.props.updatedSubprocessInternal.name,
            
            key: this.props.updatedSubprocessInternal.key,
            
            process: this.props.updatedSubprocessInternal.process,
            
            nodeDef: this.props.updatedSubprocessInternal.nodeDef,
            
            type: this.props.updatedSubprocessInternal.type,
            
            state: this.props.updatedSubprocessInternal.state,
            
            participant: this.props.updatedSubprocessInternal.participant,
            
            application: this.props.updatedSubprocessInternal.application,
            
            processToken: this.props.updatedSubprocessInternal.processToken,
            
            instanceCounter: this.props.updatedSubprocessInternal.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedSubprocessInternal.id,
                
                name: this.props.updatedSubprocessInternal.name,
                
                key: this.props.updatedSubprocessInternal.key,
                
                process: this.props.updatedSubprocessInternal.process,
                
                nodeDef: this.props.updatedSubprocessInternal.nodeDef,
                
                type: this.props.updatedSubprocessInternal.type,
                
                state: this.props.updatedSubprocessInternal.state,
                
                participant: this.props.updatedSubprocessInternal.participant,
                
                application: this.props.updatedSubprocessInternal.application,
                
                processToken: this.props.updatedSubprocessInternal.processToken,
                
                instanceCounter: this.props.updatedSubprocessInternal.instanceCounter,
            }
        };
    }
}
