/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateLaneMutation extends Relay.Mutation {
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
                id,
                name,
                key,
                extensions,
                processDef,
                counter,
                nodeDefCollection,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateLane
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateLanePayload {
                entity {
                    id,
                    name,
                    key,
                    extensions,
                    processDef,
                    counter,
                    nodeDefCollection,
                },
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
                }
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                catalog: this.props.catalog.id,
                entity: this.props.lane.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedLane.id,
            
            name: this.props.updatedLane.name,
            
            key: this.props.updatedLane.key,
            
            extensions: this.props.updatedLane.extensions,
            
            processDef: this.props.updatedLane.processDef,
            
            counter: this.props.updatedLane.counter,
            
            nodeDefCollection: this.props.updatedLane.nodeDefCollection,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedLane.id,
                
                name: this.props.updatedLane.name,
                
                key: this.props.updatedLane.key,
                
                extensions: this.props.updatedLane.extensions,
                
                processDef: this.props.updatedLane.processDef,
                
                counter: this.props.updatedLane.counter,
                
                nodeDefCollection: this.props.updatedLane.nodeDefCollection,
            }
        };
    }
}
