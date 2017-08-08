/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveParallelGatewayMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ParallelGatewayConnection {
                    totalCount
                }
            }
        `,

        parallelgateway: () => Relay.QL`
            fragment on ParallelGateway {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeParallelGateway
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveParallelGatewayPayload {
                catalog {
                    id,
                    ParallelGatewayConnection(first: 0) {
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
                                parallelType,
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
            connectionName: 'ParallelGatewayConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.parallelgateway.id
        };
    }

    getOptimisticResponse() {
        const { catalog, parallelgateway } = this.props;
        let { totalCount } = catalog.ParallelGatewayConnection;

        return {
            catalog: {
                ParallelGatewayConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: parallelgateway.id
        };
    }
}
