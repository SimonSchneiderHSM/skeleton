/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateNodeDefMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                NodeDefConnection {
                    totalCount
                }
            }
        `,
        nodedef: () => Relay.QL`
            fragment on NodeDef {
                id,
                name,
                key,
                processDef,
                lane,
                type,
                extensions,
                attachedToNode,
                events,
                script,
                eventType,
                cancelActivity,
                subProcessKey,
                subProcessDef,
                counter,
                timerDefinitionType,
                timerDefinition,
                startContext,
                startContextEntityType,
                signal,
                message,
                condition,
                errorName,
                errorCode,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateNodeDef
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateNodeDefPayload {
                entity {
                    id,
                    name,
                    key,
                    processDef,
                    lane,
                    type,
                    extensions,
                    attachedToNode,
                    events,
                    script,
                    eventType,
                    cancelActivity,
                    subProcessKey,
                    subProcessDef,
                    counter,
                    timerDefinitionType,
                    timerDefinition,
                    startContext,
                    startContextEntityType,
                    signal,
                    message,
                    condition,
                    errorName,
                    errorCode,
                },
                catalog {
                    id,
                    NodeDefConnection(first: 0) {
                        edges {
                            node {
                                id,
                                name,
                                key,
                                processDef,
                                lane,
                                type,
                                extensions,
                                attachedToNode,
                                events,
                                script,
                                eventType,
                                cancelActivity,
                                subProcessKey,
                                subProcessDef,
                                counter,
                                timerDefinitionType,
                                timerDefinition,
                                startContext,
                                startContextEntityType,
                                signal,
                                message,
                                condition,
                                errorName,
                                errorCode,
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
                entity: this.props.nodedef.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedNodeDef.id,
            
            name: this.props.updatedNodeDef.name,
            
            key: this.props.updatedNodeDef.key,
            
            processDef: this.props.updatedNodeDef.processDef,
            
            lane: this.props.updatedNodeDef.lane,
            
            type: this.props.updatedNodeDef.type,
            
            extensions: this.props.updatedNodeDef.extensions,
            
            attachedToNode: this.props.updatedNodeDef.attachedToNode,
            
            events: this.props.updatedNodeDef.events,
            
            script: this.props.updatedNodeDef.script,
            
            eventType: this.props.updatedNodeDef.eventType,
            
            cancelActivity: this.props.updatedNodeDef.cancelActivity,
            
            subProcessKey: this.props.updatedNodeDef.subProcessKey,
            
            subProcessDef: this.props.updatedNodeDef.subProcessDef,
            
            counter: this.props.updatedNodeDef.counter,
            
            timerDefinitionType: this.props.updatedNodeDef.timerDefinitionType,
            
            timerDefinition: this.props.updatedNodeDef.timerDefinition,
            
            startContext: this.props.updatedNodeDef.startContext,
            
            startContextEntityType: this.props.updatedNodeDef.startContextEntityType,
            
            signal: this.props.updatedNodeDef.signal,
            
            message: this.props.updatedNodeDef.message,
            
            condition: this.props.updatedNodeDef.condition,
            
            errorName: this.props.updatedNodeDef.errorName,
            
            errorCode: this.props.updatedNodeDef.errorCode,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedNodeDef.id,
                
                name: this.props.updatedNodeDef.name,
                
                key: this.props.updatedNodeDef.key,
                
                processDef: this.props.updatedNodeDef.processDef,
                
                lane: this.props.updatedNodeDef.lane,
                
                type: this.props.updatedNodeDef.type,
                
                extensions: this.props.updatedNodeDef.extensions,
                
                attachedToNode: this.props.updatedNodeDef.attachedToNode,
                
                events: this.props.updatedNodeDef.events,
                
                script: this.props.updatedNodeDef.script,
                
                eventType: this.props.updatedNodeDef.eventType,
                
                cancelActivity: this.props.updatedNodeDef.cancelActivity,
                
                subProcessKey: this.props.updatedNodeDef.subProcessKey,
                
                subProcessDef: this.props.updatedNodeDef.subProcessDef,
                
                counter: this.props.updatedNodeDef.counter,
                
                timerDefinitionType: this.props.updatedNodeDef.timerDefinitionType,
                
                timerDefinition: this.props.updatedNodeDef.timerDefinition,
                
                startContext: this.props.updatedNodeDef.startContext,
                
                startContextEntityType: this.props.updatedNodeDef.startContextEntityType,
                
                signal: this.props.updatedNodeDef.signal,
                
                message: this.props.updatedNodeDef.message,
                
                condition: this.props.updatedNodeDef.condition,
                
                errorName: this.props.updatedNodeDef.errorName,
                
                errorCode: this.props.updatedNodeDef.errorCode,
            }
        };
    }
}
