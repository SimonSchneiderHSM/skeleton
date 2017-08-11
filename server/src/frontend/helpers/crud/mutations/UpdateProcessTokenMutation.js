/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateProcessTokenMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ProcessTokenConnection {
                    totalCount
                }
            }
        `,
        processtoken: () => Relay.QL`
            fragment on ProcessToken {
                id,
                data,
                process,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateProcessToken
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateProcessTokenPayload {
                entity {
                    id,
                    data,
                    process,
                },
                catalog {
                    id,
                    ProcessTokenConnection(first: 0) {
                        edges {
                            node {
                                id,
                                data,
                                process,
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
                entity: this.props.processtoken.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedProcessToken.id,
            
            data: this.props.updatedProcessToken.data,
            
            process: this.props.updatedProcessToken.process,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedProcessToken.id,
                
                data: this.props.updatedProcessToken.data,
                
                process: this.props.updatedProcessToken.process,
            }
        };
    }
}
