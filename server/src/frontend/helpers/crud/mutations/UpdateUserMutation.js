/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateUserMutation extends Relay.Mutation {
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
                id,
                name,
                password,
                roles,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateUser
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateUserPayload {
                entity {
                    id,
                    name,
                    password,
                    roles,
                },
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
                }
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                catalog: this.props.catalog.id,
                entity: this.props.user.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedUser.id,
            
            name: this.props.updatedUser.name,
            
            password: this.props.updatedUser.password,
            
            roles: this.props.updatedUser.roles,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedUser.id,
                
                name: this.props.updatedUser.name,
                
                password: this.props.updatedUser.password,
                
                roles: this.props.updatedUser.roles,
            }
        };
    }
}
