/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveLaneMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                LaneConnection {
                    totalCount
                }
            }
        `,

        lane: () => Relay.QL`
            fragment on Lane {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeLane
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveLanePayload {
                catalog {
                    id,
                    LaneConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                extensions,
                                processDef,
                                counter,
                                nodeDefCollection,
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
            connectionName: 'LaneConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.lane.id
        };
    }

    getOptimisticResponse() {
        const { catalog, lane } = this.props;
        let { totalCount } = catalog.LaneConnection;

        return {
            catalog: {
                LaneConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: lane.id
        };
    }
}
