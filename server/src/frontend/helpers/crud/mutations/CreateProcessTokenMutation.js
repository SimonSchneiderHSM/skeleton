/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateProcessTokenMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ProcessTokenConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createProcessToken
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            data: this.props.data,
            process: this.props.process,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateProcessTokenPayload {
                catalog {
                    id,
                    ProcessTokenConnection(first: 0) {
                        edges {
                            node {
                                id,
                                data,
                                process,
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
                connectionName: 'ProcessTokenConnection',
                edgeName: 'entityEdge',
                rangeBehaviors: (connectionArgs) => 'refetch'
            }
        ];
    }

    getOptimisticResponse() {
        const {
            id,
            data,
            process,
            catalog } = this.props;
        let { totalCount } = catalog.ProcessTokenConnection;

        return {
            catalog: {
                ProcessTokenConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
                    id,
                    data,
                    process,
                }
            }
        };
    }
}
