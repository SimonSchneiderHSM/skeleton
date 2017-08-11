/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateParallelGatewayMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ParallelGatewayConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createParallelGateway
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            name: this.props.name,
            key: this.props.key,
            process: this.props.process,
            nodeDef: this.props.nodeDef,
            type: this.props.type,
            state: this.props.state,
            participant: this.props.participant,
            application: this.props.application,
            processToken: this.props.processToken,
            instanceCounter: this.props.instanceCounter,
            parallelType: this.props.parallelType,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateParallelGatewayPayload {
                catalog {
                    id,
                    ParallelGatewayConnection(first: 0) {
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
                                parallelType,
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
                connectionName: 'ParallelGatewayConnection',
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
            process,
            nodeDef,
            type,
            state,
            participant,
            application,
            processToken,
            instanceCounter,
            parallelType,
            catalog } = this.props;
        let { totalCount } = catalog.ParallelGatewayConnection;

        return {
            catalog: {
                ParallelGatewayConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
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
                    parallelType,
                }
            }
        };
    }
}
