/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveNodeDefMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                NodeDefConnection {
                    totalCount
                }
            }
        `,

        nodedef: () => Relay.QL`
            fragment on NodeDef {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeNodeDef
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveNodeDefPayload {
                catalog {
                    id,
                    NodeDefConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                processDef,
                                lane,
                                type,
                                extensions,
                                attachedToNode,
                                events,
                                script,
                                eventType,
                                cancelActivity,
                                subProcessKey,
                                subProcessDef,
                                counter,
                                timerDefinitionType,
                                timerDefinition,
                                startContext,
                                startContextEntityType,
                                signal,
                                message,
                                condition,
                                errorName,
                                errorCode,
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
            connectionName: 'NodeDefConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.nodedef.id
        };
    }

    getOptimisticResponse() {
        const { catalog, nodedef } = this.props;
        let { totalCount } = catalog.NodeDefConnection;

        return {
            catalog: {
                NodeDefConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: nodedef.id
        };
    }
}
