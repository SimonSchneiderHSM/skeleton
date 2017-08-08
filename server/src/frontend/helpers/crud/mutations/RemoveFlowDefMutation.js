/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveFlowDefMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                FlowDefConnection {
                    totalCount
                }
            }
        `,

        flowdef: () => Relay.QL`
            fragment on FlowDef {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeFlowDef
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveFlowDefPayload {
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
                deletedId
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'NODE_DELETE',
            parentName: 'catalog',
            parentID: this.props.catalog.id,
            connectionName: 'FlowDefConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.flowdef.id
        };
    }

    getOptimisticResponse() {
        const { catalog, flowdef } = this.props;
        let { totalCount } = catalog.FlowDefConnection;

        return {
            catalog: {
                FlowDefConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: flowdef.id
        };
    }
}
