/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveProcessTokenMutation extends Relay.Mutation {
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
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeProcessToken
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveProcessTokenPayload {
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
                },
                deletedId
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'NODE_DELETE',
            parentName: 'catalog',
            parentID: this.props.catalog.id,
            connectionName: 'ProcessTokenConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.processtoken.id
        };
    }

    getOptimisticResponse() {
        const { catalog, processtoken } = this.props;
        let { totalCount } = catalog.ProcessTokenConnection;

        return {
            catalog: {
                ProcessTokenConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: processtoken.id
        };
    }
}
