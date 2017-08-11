/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateSessionStoreMutation extends Relay.Mutation {
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
                id,
                identityId,
                systemUserId,
                data,
                roles,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateSessionStore
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateSessionStorePayload {
                entity {
                    id,
                    identityId,
                    systemUserId,
                    data,
                    roles,
                },
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
                }
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                catalog: this.props.catalog.id,
                entity: this.props.sessionstore.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedSessionStore.id,
            
            identityId: this.props.updatedSessionStore.identityId,
            
            systemUserId: this.props.updatedSessionStore.systemUserId,
            
            data: this.props.updatedSessionStore.data,
            
            roles: this.props.updatedSessionStore.roles,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedSessionStore.id,
                
                identityId: this.props.updatedSessionStore.identityId,
                
                systemUserId: this.props.updatedSessionStore.systemUserId,
                
                data: this.props.updatedSessionStore.data,
                
                roles: this.props.updatedSessionStore.roles,
            }
        };
    }
}
