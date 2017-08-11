/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateFlowDefMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                FlowDefConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createFlowDef
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            name: this.props.name,
            key: this.props.key,
            processDef: this.props.processDef,
            source: this.props.source,
            target: this.props.target,
            condition: this.props.condition,
            extensions: this.props.extensions,
            counter: this.props.counter,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateFlowDefPayload {
                catalog {
                    id,
                    FlowDefConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                processDef,
                                source,
                                target,
                                condition,
                                extensions,
                                counter,
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
                connectionName: 'FlowDefConnection',
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
            processDef,
            source,
            target,
            condition,
            extensions,
            counter,
            catalog } = this.props;
        let { totalCount } = catalog.FlowDefConnection;

        return {
            catalog: {
                FlowDefConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
                    id,
                    name,
                    key,
                    processDef,
                    source,
                    target,
                    condition,
                    extensions,
                    counter,
                }
            }
        };
    }
}
