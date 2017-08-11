/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveSubprocessInternalMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                SubprocessInternalConnection {
                    totalCount
                }
            }
        `,

        subprocessinternal: () => Relay.QL`
            fragment on SubprocessInternal {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeSubprocessInternal
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveSubprocessInternalPayload {
                catalog {
                    id,
                    SubprocessInternalConnection(first: 0) {
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
            connectionName: 'SubprocessInternalConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.subprocessinternal.id
        };
    }

    getOptimisticResponse() {
        const { catalog, subprocessinternal } = this.props;
        let { totalCount } = catalog.SubprocessInternalConnection;

        return {
            catalog: {
                SubprocessInternalConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: subprocessinternal.id
        };
    }
}
