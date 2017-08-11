/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateSubprocessExternalMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                SubprocessExternalConnection {
                    totalCount
                }
            }
        `,
        subprocessexternal: () => Relay.QL`
            fragment on SubprocessExternal {
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
            updateSubprocessExternal
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateSubprocessExternalPayload {
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
                    SubprocessExternalConnection(first: 0) {
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
                entity: this.props.subprocessexternal.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedSubprocessExternal.id,
            
            name: this.props.updatedSubprocessExternal.name,
            
            key: this.props.updatedSubprocessExternal.key,
            
            process: this.props.updatedSubprocessExternal.process,
            
            nodeDef: this.props.updatedSubprocessExternal.nodeDef,
            
            type: this.props.updatedSubprocessExternal.type,
            
            state: this.props.updatedSubprocessExternal.state,
            
            participant: this.props.updatedSubprocessExternal.participant,
            
            application: this.props.updatedSubprocessExternal.application,
            
            processToken: this.props.updatedSubprocessExternal.processToken,
            
            instanceCounter: this.props.updatedSubprocessExternal.instanceCounter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedSubprocessExternal.id,
                
                name: this.props.updatedSubprocessExternal.name,
                
                key: this.props.updatedSubprocessExternal.key,
                
                process: this.props.updatedSubprocessExternal.process,
                
                nodeDef: this.props.updatedSubprocessExternal.nodeDef,
                
                type: this.props.updatedSubprocessExternal.type,
                
                state: this.props.updatedSubprocessExternal.state,
                
                participant: this.props.updatedSubprocessExternal.participant,
                
                application: this.props.updatedSubprocessExternal.application,
                
                processToken: this.props.updatedSubprocessExternal.processToken,
                
                instanceCounter: this.props.updatedSubprocessExternal.instanceCounter,
            }
        };
    }
}
