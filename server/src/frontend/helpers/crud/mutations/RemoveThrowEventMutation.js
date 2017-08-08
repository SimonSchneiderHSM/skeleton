/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveThrowEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ThrowEventConnection {
                    totalCount
                }
            }
        `,

        throwevent: () => Relay.QL`
            fragment on ThrowEvent {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeThrowEvent
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveThrowEventPayload {
                catalog {
                    id,
                    ThrowEventConnection(first: 0) {
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
            connectionName: 'ThrowEventConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.throwevent.id
        };
    }

    getOptimisticResponse() {
        const { catalog, throwevent } = this.props;
        let { totalCount } = catalog.ThrowEventConnection;

        return {
            catalog: {
                ThrowEventConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: throwevent.id
        };
    }
}
