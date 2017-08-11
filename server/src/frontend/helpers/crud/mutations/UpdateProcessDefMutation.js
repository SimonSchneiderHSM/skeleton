/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateProcessDefMutation extends Relay.Mutation {
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
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateProcessDef
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateProcessDefPayload {
                entity {
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
                },
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
                }
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                catalog: this.props.catalog.id,
                entity: this.props.processdef.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedProcessDef.id,
            
            name: this.props.updatedProcessDef.name,
            
            key: this.props.updatedProcessDef.key,
            
            defId: this.props.updatedProcessDef.defId,
            
            xml: this.props.updatedProcessDef.xml,
            
            extensions: this.props.updatedProcessDef.extensions,
            
            internalName: this.props.updatedProcessDef.internalName,
            
            path: this.props.updatedProcessDef.path,
            
            category: this.props.updatedProcessDef.category,
            
            module: this.props.updatedProcessDef.module,
            
            readonly: this.props.updatedProcessDef.readonly,
            
            version: this.props.updatedProcessDef.version,
            
            counter: this.props.updatedProcessDef.counter,
            
            nodeDefCollection: this.props.updatedProcessDef.nodeDefCollection,
            
            flowDefCollection: this.props.updatedProcessDef.flowDefCollection,
            
            laneCollection: this.props.updatedProcessDef.laneCollection,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedProcessDef.id,
                
                name: this.props.updatedProcessDef.name,
                
                key: this.props.updatedProcessDef.key,
                
                defId: this.props.updatedProcessDef.defId,
                
                xml: this.props.updatedProcessDef.xml,
                
                extensions: this.props.updatedProcessDef.extensions,
                
                internalName: this.props.updatedProcessDef.internalName,
                
                path: this.props.updatedProcessDef.path,
                
                category: this.props.updatedProcessDef.category,
                
                module: this.props.updatedProcessDef.module,
                
                readonly: this.props.updatedProcessDef.readonly,
                
                version: this.props.updatedProcessDef.version,
                
                counter: this.props.updatedProcessDef.counter,
                
                nodeDefCollection: this.props.updatedProcessDef.nodeDefCollection,
                
                flowDefCollection: this.props.updatedProcessDef.flowDefCollection,
                
                laneCollection: this.props.updatedProcessDef.laneCollection,
            }
        };
    }
}
