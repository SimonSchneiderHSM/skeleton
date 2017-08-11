/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveCatchEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                CatchEventConnection {
                    totalCount
                }
            }
        `,

        catchevent: () => Relay.QL`
            fragment on CatchEvent {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeCatchEvent
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveCatchEventPayload {
                catalog {
                    id,
                    CatchEventConnection(first: 0) {
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
            connectionName: 'CatchEventConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.catchevent.id
        };
    }

    getOptimisticResponse() {
        const { catalog, catchevent } = this.props;
        let { totalCount } = catalog.CatchEventConnection;

        return {
            catalog: {
                CatchEventConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: catchevent.id
        };
    }
}
