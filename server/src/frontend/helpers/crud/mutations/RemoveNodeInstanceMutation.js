/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveNodeInstanceMutation extends Relay.Mutation {
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
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeNodeInstance
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveNodeInstancePayload {
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
            connectionName: 'NodeInstanceConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.nodeinstance.id
        };
    }

    getOptimisticResponse() {
        const { catalog, nodeinstance } = this.props;
        let { totalCount } = catalog.NodeInstanceConnection;

        return {
            catalog: {
                NodeInstanceConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: nodeinstance.id
        };
    }
}
