/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateUserMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                UserConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createUser
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            name: this.props.name,
            password: this.props.password,
            roles: this.props.roles,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateUserPayload {
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
                connectionName: 'UserConnection',
                edgeName: 'entityEdge',
                rangeBehaviors: (connectionArgs) => 'refetch'
            }
        ];
    }

    getOptimisticResponse() {
        const {
            id,
            name,
            password,
            roles,
            catalog } = this.props;
        let { totalCount } = catalog.UserConnection;

        return {
            catalog: {
                UserConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
                    id,
                    name,
                    password,
                    roles,
                }
            }
        };
    }
}
