/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateReservationMutation extends Relay.Mutation {
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
                id,
                name,
                category,
                isOneWay,
                navigationSystem,
                additionalDriver,
                price,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateReservation
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateReservationPayload {
                entity {
                    id,
                    name,
                    category,
                    isOneWay,
                    navigationSystem,
                    additionalDriver,
                    price,
                },
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
                }
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                catalog: this.props.catalog.id,
                entity: this.props.reservation.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedReservation.id,
            
            name: this.props.updatedReservation.name,
            
            category: this.props.updatedReservation.category,
            
            isOneWay: this.props.updatedReservation.isOneWay,
            
            navigationSystem: this.props.updatedReservation.navigationSystem,
            
            additionalDriver: this.props.updatedReservation.additionalDriver,
            
            price: this.props.updatedReservation.price,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedReservation.id,
                
                name: this.props.updatedReservation.name,
                
                category: this.props.updatedReservation.category,
                
                isOneWay: this.props.updatedReservation.isOneWay,
                
                navigationSystem: this.props.updatedReservation.navigationSystem,
                
                additionalDriver: this.props.updatedReservation.additionalDriver,
                
                price: this.props.updatedReservation.price,
            }
        };
    }
}
