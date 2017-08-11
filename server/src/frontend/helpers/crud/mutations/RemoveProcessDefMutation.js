/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveProcessDefMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ProcessDefConnection {
                    totalCount
                }
            }
        `,

        processdef: () => Relay.QL`
            fragment on ProcessDef {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeProcessDef
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveProcessDefPayload {
                catalog {
                    id,
                    ProcessDefConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                defId,
                                xml,
                                extensions,
                                internalName,
                                path,
                                category,
                                module,
                                readonly,
                                version,
                                counter,
                                nodeDefCollection,
                                flowDefCollection,
                                laneCollection,
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
            connectionName: 'ProcessDefConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.processdef.id
        };
    }

    getOptimisticResponse() {
        const { catalog, processdef } = this.props;
        let { totalCount } = catalog.ProcessDefConnection;

        return {
            catalog: {
                ProcessDefConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: processdef.id
        };
    }
}
