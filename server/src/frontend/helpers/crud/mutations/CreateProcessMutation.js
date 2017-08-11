/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateProcessMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ProcessConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createProcess
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            name: this.props.name,
            key: this.props.key,
            status: this.props.status,
            processDef: this.props.processDef,
            isSubProcess: this.props.isSubProcess,
            callerId: this.props.callerId,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateProcessPayload {
                catalog {
                    id,
                    ProcessConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                status,
                                processDef,
                                isSubProcess,
                                callerId,
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
                connectionName: 'ProcessConnection',
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
            status,
            processDef,
            isSubProcess,
            callerId,
            catalog } = this.props;
        let { totalCount } = catalog.ProcessConnection;

        return {
            catalog: {
                ProcessConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
                    id,
                    name,
                    key,
                    status,
                    processDef,
                    isSubProcess,
                    callerId,
                }
            }
        };
    }
}
