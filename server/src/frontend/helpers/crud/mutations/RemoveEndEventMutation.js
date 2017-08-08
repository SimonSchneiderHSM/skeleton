/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveEndEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                EndEventConnection {
                    totalCount
                }
            }
        `,

        endevent: () => Relay.QL`
            fragment on EndEvent {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeEndEvent
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveEndEventPayload {
                catalog {
                    id,
                    EndEventConnection(first: 0) {
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
            connectionName: 'EndEventConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.endevent.id
        };
    }

    getOptimisticResponse() {
        const { catalog, endevent } = this.props;
        let { totalCount } = catalog.EndEventConnection;

        return {
            catalog: {
                EndEventConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: endevent.id
        };
    }
}
