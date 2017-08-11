/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateLaneMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                LaneConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createLane
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            name: this.props.name,
            key: this.props.key,
            extensions: this.props.extensions,
            processDef: this.props.processDef,
            counter: this.props.counter,
            nodeDefCollection: this.props.nodeDefCollection,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateLanePayload {
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
                connectionName: 'LaneConnection',
                edgeName: 'entityEdge',
                rangeBehaviors: (connectionArgs) => 'refetch'
            }
        ];
    }

    getOptimisticResponse() {
        const {
            id,
            name,
            key,
            extensions,
            processDef,
            counter,
            nodeDefCollection,
            catalog } = this.props;
        let { totalCount } = catalog.LaneConnection;

        return {
            catalog: {
                LaneConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
                    id,
                    name,
                    key,
                    extensions,
                    processDef,
                    counter,
                    nodeDefCollection,
                }
            }
        };
    }
}
