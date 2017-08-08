/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveExclusiveGatewayMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ExclusiveGatewayConnection {
                    totalCount
                }
            }
        `,

        exclusivegateway: () => Relay.QL`
            fragment on ExclusiveGateway {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeExclusiveGateway
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveExclusiveGatewayPayload {
                catalog {
                    id,
                    ExclusiveGatewayConnection(first: 0) {
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
                                follow,
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
            connectionName: 'ExclusiveGatewayConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.exclusivegateway.id
        };
    }

    getOptimisticResponse() {
        const { catalog, exclusivegateway } = this.props;
        let { totalCount } = catalog.ExclusiveGatewayConnection;

        return {
            catalog: {
                ExclusiveGatewayConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: exclusivegateway.id
        };
    }
}
