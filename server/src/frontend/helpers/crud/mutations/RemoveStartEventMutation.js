/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveStartEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                StartEventConnection {
                    totalCount
                }
            }
        `,

        startevent: () => Relay.QL`
            fragment on StartEvent {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeStartEvent
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveStartEventPayload {
                catalog {
                    id,
                    StartEventConnection(first: 0) {
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
            connectionName: 'StartEventConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.startevent.id
        };
    }

    getOptimisticResponse() {
        const { catalog, startevent } = this.props;
        let { totalCount } = catalog.StartEventConnection;

        return {
            catalog: {
                StartEventConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: startevent.id
        };
    }
}
