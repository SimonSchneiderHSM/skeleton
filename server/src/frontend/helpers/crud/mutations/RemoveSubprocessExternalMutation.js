/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveSubprocessExternalMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                SubprocessExternalConnection {
                    totalCount
                }
            }
        `,

        subprocessexternal: () => Relay.QL`
            fragment on SubprocessExternal {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeSubprocessExternal
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveSubprocessExternalPayload {
                catalog {
                    id,
                    SubprocessExternalConnection(first: 0) {
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
            connectionName: 'SubprocessExternalConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.subprocessexternal.id
        };
    }

    getOptimisticResponse() {
        const { catalog, subprocessexternal } = this.props;
        let { totalCount } = catalog.SubprocessExternalConnection;

        return {
            catalog: {
                SubprocessExternalConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: subprocessexternal.id
        };
    }
}
