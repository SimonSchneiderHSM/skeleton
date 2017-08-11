/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveSessionStoreMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                SessionStoreConnection {
                    totalCount
                }
            }
        `,

        sessionstore: () => Relay.QL`
            fragment on SessionStore {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeSessionStore
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveSessionStorePayload {
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
                deletedId
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'NODE_DELETE',
            parentName: 'catalog',
            parentID: this.props.catalog.id,
            connectionName: 'SessionStoreConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.sessionstore.id
        };
    }

    getOptimisticResponse() {
        const { catalog, sessionstore } = this.props;
        let { totalCount } = catalog.SessionStoreConnection;

        return {
            catalog: {
                SessionStoreConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: sessionstore.id
        };
    }
}
