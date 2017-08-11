/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveScriptTaskMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ScriptTaskConnection {
                    totalCount
                }
            }
        `,

        scripttask: () => Relay.QL`
            fragment on ScriptTask {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeScriptTask
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveScriptTaskPayload {
                catalog {
                    id,
                    ScriptTaskConnection(first: 0) {
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
                                script,
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
            connectionName: 'ScriptTaskConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.scripttask.id
        };
    }

    getOptimisticResponse() {
        const { catalog, scripttask } = this.props;
        let { totalCount } = catalog.ScriptTaskConnection;

        return {
            catalog: {
                ScriptTaskConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: scripttask.id
        };
    }
}
