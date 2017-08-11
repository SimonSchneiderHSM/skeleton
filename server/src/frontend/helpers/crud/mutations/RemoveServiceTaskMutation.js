/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveServiceTaskMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ServiceTaskConnection {
                    totalCount
                }
            }
        `,

        servicetask: () => Relay.QL`
            fragment on ServiceTask {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeServiceTask
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveServiceTaskPayload {
                catalog {
                    id,
                    ServiceTaskConnection(first: 0) {
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
                deletedId
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'NODE_DELETE',
            parentName: 'catalog',
            parentID: this.props.catalog.id,
            connectionName: 'ServiceTaskConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.servicetask.id
        };
    }

    getOptimisticResponse() {
        const { catalog, servicetask } = this.props;
        let { totalCount } = catalog.ServiceTaskConnection;

        return {
            catalog: {
                ServiceTaskConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: servicetask.id
        };
    }
}
