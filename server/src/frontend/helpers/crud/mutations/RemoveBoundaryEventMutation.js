/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveBoundaryEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                BoundaryEventConnection {
                    totalCount
                }
            }
        `,

        boundaryevent: () => Relay.QL`
            fragment on BoundaryEvent {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeBoundaryEvent
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveBoundaryEventPayload {
                catalog {
                    id,
                    BoundaryEventConnection(first: 0) {
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
            connectionName: 'BoundaryEventConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.boundaryevent.id
        };
    }

    getOptimisticResponse() {
        const { catalog, boundaryevent } = this.props;
        let { totalCount } = catalog.BoundaryEventConnection;

        return {
            catalog: {
                BoundaryEventConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: boundaryevent.id
        };
    }
}
