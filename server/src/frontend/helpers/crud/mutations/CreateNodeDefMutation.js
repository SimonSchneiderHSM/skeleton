/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateNodeDefMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                NodeDefConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createNodeDef
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            name: this.props.name,
            key: this.props.key,
            processDef: this.props.processDef,
            lane: this.props.lane,
            type: this.props.type,
            extensions: this.props.extensions,
            attachedToNode: this.props.attachedToNode,
            events: this.props.events,
            script: this.props.script,
            eventType: this.props.eventType,
            cancelActivity: this.props.cancelActivity,
            subProcessKey: this.props.subProcessKey,
            subProcessDef: this.props.subProcessDef,
            counter: this.props.counter,
            timerDefinitionType: this.props.timerDefinitionType,
            timerDefinition: this.props.timerDefinition,
            startContext: this.props.startContext,
            startContextEntityType: this.props.startContextEntityType,
            signal: this.props.signal,
            message: this.props.message,
            condition: this.props.condition,
            errorName: this.props.errorName,
            errorCode: this.props.errorCode,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateNodeDefPayload {
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
                connectionName: 'NodeDefConnection',
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
            catalog } = this.props;
        let { totalCount } = catalog.NodeDefConnection;

        return {
            catalog: {
                NodeDefConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
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
            }
        };
    }
}
