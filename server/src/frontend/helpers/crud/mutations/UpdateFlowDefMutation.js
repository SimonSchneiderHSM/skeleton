/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateFlowDefMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                FlowDefConnection {
                    totalCount
                }
            }
        `,
        flowdef: () => Relay.QL`
            fragment on FlowDef {
                id,
                name,
                key,
                processDef,
                source,
                target,
                condition,
                extensions,
                counter,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateFlowDef
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateFlowDefPayload {
                entity {
                    id,
                    name,
                    key,
                    processDef,
                    source,
                    target,
                    condition,
                    extensions,
                    counter,
                },
                catalog {
                    id,
                    FlowDefConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                processDef,
                                source,
                                target,
                                condition,
                                extensions,
                                counter,
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
                entity: this.props.flowdef.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedFlowDef.id,
            
            name: this.props.updatedFlowDef.name,
            
            key: this.props.updatedFlowDef.key,
            
            processDef: this.props.updatedFlowDef.processDef,
            
            source: this.props.updatedFlowDef.source,
            
            target: this.props.updatedFlowDef.target,
            
            condition: this.props.updatedFlowDef.condition,
            
            extensions: this.props.updatedFlowDef.extensions,
            
            counter: this.props.updatedFlowDef.counter,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedFlowDef.id,
                
                name: this.props.updatedFlowDef.name,
                
                key: this.props.updatedFlowDef.key,
                
                processDef: this.props.updatedFlowDef.processDef,
                
                source: this.props.updatedFlowDef.source,
                
                target: this.props.updatedFlowDef.target,
                
                condition: this.props.updatedFlowDef.condition,
                
                extensions: this.props.updatedFlowDef.extensions,
                
                counter: this.props.updatedFlowDef.counter,
            }
        };
    }
}
