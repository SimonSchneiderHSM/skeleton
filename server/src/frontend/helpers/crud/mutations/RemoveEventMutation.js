/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                EventConnection {
                    totalCount
                }
            }
        `,

        event: () => Relay.QL`
            fragment on Event {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeEvent
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveEventPayload {
                catalog {
                    id,
                    EventConnection(first: 0) {
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
            connectionName: 'EventConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.event.id
        };
    }

    getOptimisticResponse() {
        const { catalog, event } = this.props;
        let { totalCount } = catalog.EventConnection;

        return {
            catalog: {
                EventConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: event.id
        };
    }
}
