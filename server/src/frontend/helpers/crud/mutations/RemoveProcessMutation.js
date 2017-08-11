/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveProcessMutation extends Relay.Mutation {
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
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeProcess
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveProcessPayload {
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
            connectionName: 'ProcessConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.process.id
        };
    }

    getOptimisticResponse() {
        const { catalog, process } = this.props;
        let { totalCount } = catalog.ProcessConnection;

        return {
            catalog: {
                ProcessConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: process.id
        };
    }
}
