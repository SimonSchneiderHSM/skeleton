/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveUserTaskMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                UserTaskConnection {
                    totalCount
                }
            }
        `,

        usertask: () => Relay.QL`
            fragment on UserTask {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeUserTask
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveUserTaskPayload {
                catalog {
                    id,
                    UserTaskConnection(first: 0) {
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
            connectionName: 'UserTaskConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.usertask.id
        };
    }

    getOptimisticResponse() {
        const { catalog, usertask } = this.props;
        let { totalCount } = catalog.UserTaskConnection;

        return {
            catalog: {
                UserTaskConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: usertask.id
        };
    }
}
