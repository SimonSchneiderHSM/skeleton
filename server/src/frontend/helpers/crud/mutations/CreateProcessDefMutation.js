/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateProcessDefMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                ProcessDefConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createProcessDef
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            name: this.props.name,
            key: this.props.key,
            defId: this.props.defId,
            xml: this.props.xml,
            extensions: this.props.extensions,
            internalName: this.props.internalName,
            path: this.props.path,
            category: this.props.category,
            module: this.props.module,
            readonly: this.props.readonly,
            version: this.props.version,
            counter: this.props.counter,
            nodeDefCollection: this.props.nodeDefCollection,
            flowDefCollection: this.props.flowDefCollection,
            laneCollection: this.props.laneCollection,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateProcessDefPayload {
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
                connectionName: 'ProcessDefConnection',
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
            catalog } = this.props;
        let { totalCount } = catalog.ProcessDefConnection;

        return {
            catalog: {
                ProcessDefConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
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
            }
        };
    }
}
