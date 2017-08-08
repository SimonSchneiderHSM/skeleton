/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateReservationMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ReservationConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createReservation
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            name: this.props.name,
            category: this.props.category,
            isOneWay: this.props.isOneWay,
            navigationSystem: this.props.navigationSystem,
            additionalDriver: this.props.additionalDriver,
            price: this.props.price,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateReservationPayload {
                catalog {
                    id,
                    ReservationConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                category,
                                isOneWay,
                                navigationSystem,
                                additionalDriver,
                                price,
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
                connectionName: 'ReservationConnection',
                edgeName: 'entityEdge',
                rangeBehaviors: (connectionArgs) => 'refetch'
            }
        ];
    }

    getOptimisticResponse() {
        const {
            id,
            name,
            category,
            isOneWay,
            navigationSystem,
            additionalDriver,
            price,
            catalog } = this.props;
        let { totalCount } = catalog.ReservationConnection;

        return {
            catalog: {
                ReservationConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
                    id,
                    name,
                    category,
                    isOneWay,
                    navigationSystem,
                    additionalDriver,
                    price,
                }
            }
        };
    }
}
