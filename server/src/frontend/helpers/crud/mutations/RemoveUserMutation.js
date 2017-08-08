/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveUserMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                UserConnection {
                    totalCount
                }
            }
        `,

        user: () => Relay.QL`
            fragment on User {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeUser
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveUserPayload {
                catalog {
                    id,
                    UserConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                password,
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
            connectionName: 'UserConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.user.id
        };
    }

    getOptimisticResponse() {
        const { catalog, user } = this.props;
        let { totalCount } = catalog.UserConnection;

        return {
            catalog: {
                UserConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: user.id
        };
    }
}
