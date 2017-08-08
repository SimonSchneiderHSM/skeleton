/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateThrowEventMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ThrowEventConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createThrowEvent
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
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateThrowEventPayload {
                catalog {
                    id,
                    ThrowEventConnection(first: 0) {
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
                connectionName: 'ThrowEventConnection',
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
            catalog } = this.props;
        let { totalCount } = catalog.ThrowEventConnection;

        return {
            catalog: {
                ThrowEventConnection: {
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
                }
            }
        };
    }
}
