/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateSessionStoreMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                SessionStoreConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createSessionStore
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            identityId: this.props.identityId,
            systemUserId: this.props.systemUserId,
            data: this.props.data,
            roles: this.props.roles,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateSessionStorePayload {
                catalog {
                    id,
                    SessionStoreConnection(first: 0) {
                        edges {
                            node {
                                id,
                                identityId,
                                systemUserId,
                                data,
                                roles,
                            }
                        },
                        totalCount
                    }
                },
                entityEdge
            }
        `;
    }

    getConfigs() {
        return [
            {
                type: 'FIELDS_CHANGE',
                fieldIDs: {
                    catalog: this.props.catalog.id
                }
            },
            {
                type: 'RANGE_ADD',
                parentName: 'catalog',
                parentID: this.props.catalog.id,
                connectionName: 'SessionStoreConnection',
                edgeName: 'entityEdge',
                rangeBehaviors: (connectionArgs) => 'refetch'
            }
        ];
    }

    getOptimisticResponse() {
        const {
            id,
            identityId,
            systemUserId,
            data,
            roles,
            catalog } = this.props;
        let { totalCount } = catalog.SessionStoreConnection;

        return {
            catalog: {
                SessionStoreConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
                    id,
                    identityId,
                    systemUserId,
                    data,
                    roles,
                }
            }
        };
    }
}
