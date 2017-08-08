/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveReservationMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ReservationConnection {
                    totalCount
                }
            }
        `,

        reservation: () => Relay.QL`
            fragment on Reservation {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeReservation
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveReservationPayload {
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
                deletedId
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'NODE_DELETE',
            parentName: 'catalog',
            parentID: this.props.catalog.id,
            connectionName: 'ReservationConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.reservation.id
        };
    }

    getOptimisticResponse() {
        const { catalog, reservation } = this.props;
        let { totalCount } = catalog.ReservationConnection;

        return {
            catalog: {
                ReservationConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: reservation.id
        };
    }
}
