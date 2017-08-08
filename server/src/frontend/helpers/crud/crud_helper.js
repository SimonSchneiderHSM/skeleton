/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

import * as mutations from './mutations/index';

const CrudTableHelper = {
    initialVariables: () => ({
        showTimer: false,
        showReservation: false,
        showUser: false,
        showSessionStore: false,
        showUserTask: false,
        showSubprocessExternal: false,
        showSubprocessInternal: false,
        showStartEvent: false,
        showCatchEvent: false,
        showThrowEvent: false,
        showServiceTask: false,
        showScriptTask: false,
        showProcessToken: false,
        showProcessDef: false,
        showProcess: false,
        showParallelGateway: false,
        showNodeInstance: false,
        showNodeDef: false,
        showLane: false,
        showFlowDef: false,
        showExclusiveGateway: false,
        showEvent: false,
        showEndEvent: false,
        showBoundaryEvent: false,
    }),
    preparedVariables: (className) => ({
        className,
        showTimer: (className === 'Timer'),
        showReservation: (className === 'Reservation'),
        showUser: (className === 'User'),
        showSessionStore: (className === 'SessionStore'),
        showUserTask: (className === 'UserTask'),
        showSubprocessExternal: (className === 'SubprocessExternal'),
        showSubprocessInternal: (className === 'SubprocessInternal'),
        showStartEvent: (className === 'StartEvent'),
        showCatchEvent: (className === 'CatchEvent'),
        showThrowEvent: (className === 'ThrowEvent'),
        showServiceTask: (className === 'ServiceTask'),
        showScriptTask: (className === 'ScriptTask'),
        showProcessToken: (className === 'ProcessToken'),
        showProcessDef: (className === 'ProcessDef'),
        showProcess: (className === 'Process'),
        showParallelGateway: (className === 'ParallelGateway'),
        showNodeInstance: (className === 'NodeInstance'),
        showNodeDef: (className === 'NodeDef'),
        showLane: (className === 'Lane'),
        showFlowDef: (className === 'FlowDef'),
        showExclusiveGateway: (className === 'ExclusiveGateway'),
        showEvent: (className === 'Event'),
        showEndEvent: (className === 'EndEvent'),
        showBoundaryEvent: (className === 'BoundaryEvent'),
    }),
    fragments: {
        catalog: (variables) => {
            const query = Relay.QL`
                fragment on Catalog {
                    ${mutations.CreateTimerMutation.getFragment('catalog').if(variables.showTimer)},
                    ${mutations.RemoveTimerMutation.getFragment('catalog').if(variables.showTimer)},
                    ${mutations.UpdateTimerMutation.getFragment('catalog').if(variables.showTimer)},
                    TimerConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showTimer) {
                        totalCount,
                        edges {
                            node {
                                id,
                                timerType,
                                timerIsoString,
                                timerRule,
                                eventName,
                                lastElapsed,
                                ${mutations.RemoveTimerMutation.getFragment('timer').if(variables.showTimer)},
                                ${mutations.UpdateTimerMutation.getFragment('timer').if(variables.showTimer)}
                            }
                        }
                    },
                    ${mutations.CreateReservationMutation.getFragment('catalog').if(variables.showReservation)},
                    ${mutations.RemoveReservationMutation.getFragment('catalog').if(variables.showReservation)},
                    ${mutations.UpdateReservationMutation.getFragment('catalog').if(variables.showReservation)},
                    ReservationConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showReservation) {
                        totalCount,
                        edges {
                            node {
                                id,
                                name,
                                category,
                                isOneWay,
                                navigationSystem,
                                additionalDriver,
                                price,
                                ${mutations.RemoveReservationMutation.getFragment('reservation').if(variables.showReservation)},
                                ${mutations.UpdateReservationMutation.getFragment('reservation').if(variables.showReservation)}
                            }
                        }
                    },
                    ${mutations.CreateUserMutation.getFragment('catalog').if(variables.showUser)},
                    ${mutations.RemoveUserMutation.getFragment('catalog').if(variables.showUser)},
                    ${mutations.UpdateUserMutation.getFragment('catalog').if(variables.showUser)},
                    UserConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showUser) {
                        totalCount,
                        edges {
                            node {
                                id,
                                name,
                                password,
                                roles,
                                ${mutations.RemoveUserMutation.getFragment('user').if(variables.showUser)},
                                ${mutations.UpdateUserMutation.getFragment('user').if(variables.showUser)}
                            }
                        }
                    },
                    ${mutations.CreateSessionStoreMutation.getFragment('catalog').if(variables.showSessionStore)},
                    ${mutations.RemoveSessionStoreMutation.getFragment('catalog').if(variables.showSessionStore)},
                    ${mutations.UpdateSessionStoreMutation.getFragment('catalog').if(variables.showSessionStore)},
                    SessionStoreConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showSessionStore) {
                        totalCount,
                        edges {
                            node {
                                id,
                                identityId,
                                systemUserId,
                                data,
                                roles,
                                ${mutations.RemoveSessionStoreMutation.getFragment('sessionstore').if(variables.showSessionStore)},
                                ${mutations.UpdateSessionStoreMutation.getFragment('sessionstore').if(variables.showSessionStore)}
                            }
                        }
                    },
                    ${mutations.CreateUserTaskMutation.getFragment('catalog').if(variables.showUserTask)},
                    ${mutations.RemoveUserTaskMutation.getFragment('catalog').if(variables.showUserTask)},
                    ${mutations.UpdateUserTaskMutation.getFragment('catalog').if(variables.showUserTask)},
                    UserTaskConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showUserTask) {
                        totalCount,
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
                                ${mutations.RemoveUserTaskMutation.getFragment('usertask').if(variables.showUserTask)},
                                ${mutations.UpdateUserTaskMutation.getFragment('usertask').if(variables.showUserTask)}
                            }
                        }
                    },
                    ${mutations.CreateSubprocessExternalMutation.getFragment('catalog').if(variables.showSubprocessExternal)},
                    ${mutations.RemoveSubprocessExternalMutation.getFragment('catalog').if(variables.showSubprocessExternal)},
                    ${mutations.UpdateSubprocessExternalMutation.getFragment('catalog').if(variables.showSubprocessExternal)},
                    SubprocessExternalConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showSubprocessExternal) {
                        totalCount,
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
                                ${mutations.RemoveSubprocessExternalMutation.getFragment('subprocessexternal').if(variables.showSubprocessExternal)},
                                ${mutations.UpdateSubprocessExternalMutation.getFragment('subprocessexternal').if(variables.showSubprocessExternal)}
                            }
                        }
                    },
                    ${mutations.CreateSubprocessInternalMutation.getFragment('catalog').if(variables.showSubprocessInternal)},
                    ${mutations.RemoveSubprocessInternalMutation.getFragment('catalog').if(variables.showSubprocessInternal)},
                    ${mutations.UpdateSubprocessInternalMutation.getFragment('catalog').if(variables.showSubprocessInternal)},
                    SubprocessInternalConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showSubprocessInternal) {
                        totalCount,
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
                                ${mutations.RemoveSubprocessInternalMutation.getFragment('subprocessinternal').if(variables.showSubprocessInternal)},
                                ${mutations.UpdateSubprocessInternalMutation.getFragment('subprocessinternal').if(variables.showSubprocessInternal)}
                            }
                        }
                    },
                    ${mutations.CreateStartEventMutation.getFragment('catalog').if(variables.showStartEvent)},
                    ${mutations.RemoveStartEventMutation.getFragment('catalog').if(variables.showStartEvent)},
                    ${mutations.UpdateStartEventMutation.getFragment('catalog').if(variables.showStartEvent)},
                    StartEventConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showStartEvent) {
                        totalCount,
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
                                ${mutations.RemoveStartEventMutation.getFragment('startevent').if(variables.showStartEvent)},
                                ${mutations.UpdateStartEventMutation.getFragment('startevent').if(variables.showStartEvent)}
                            }
                        }
                    },
                    ${mutations.CreateCatchEventMutation.getFragment('catalog').if(variables.showCatchEvent)},
                    ${mutations.RemoveCatchEventMutation.getFragment('catalog').if(variables.showCatchEvent)},
                    ${mutations.UpdateCatchEventMutation.getFragment('catalog').if(variables.showCatchEvent)},
                    CatchEventConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showCatchEvent) {
                        totalCount,
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
                                ${mutations.RemoveCatchEventMutation.getFragment('catchevent').if(variables.showCatchEvent)},
                                ${mutations.UpdateCatchEventMutation.getFragment('catchevent').if(variables.showCatchEvent)}
                            }
                        }
                    },
                    ${mutations.CreateThrowEventMutation.getFragment('catalog').if(variables.showThrowEvent)},
                    ${mutations.RemoveThrowEventMutation.getFragment('catalog').if(variables.showThrowEvent)},
                    ${mutations.UpdateThrowEventMutation.getFragment('catalog').if(variables.showThrowEvent)},
                    ThrowEventConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showThrowEvent) {
                        totalCount,
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
                                ${mutations.RemoveThrowEventMutation.getFragment('throwevent').if(variables.showThrowEvent)},
                                ${mutations.UpdateThrowEventMutation.getFragment('throwevent').if(variables.showThrowEvent)}
                            }
                        }
                    },
                    ${mutations.CreateServiceTaskMutation.getFragment('catalog').if(variables.showServiceTask)},
                    ${mutations.RemoveServiceTaskMutation.getFragment('catalog').if(variables.showServiceTask)},
                    ${mutations.UpdateServiceTaskMutation.getFragment('catalog').if(variables.showServiceTask)},
                    ServiceTaskConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showServiceTask) {
                        totalCount,
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
                                ${mutations.RemoveServiceTaskMutation.getFragment('servicetask').if(variables.showServiceTask)},
                                ${mutations.UpdateServiceTaskMutation.getFragment('servicetask').if(variables.showServiceTask)}
                            }
                        }
                    },
                    ${mutations.CreateScriptTaskMutation.getFragment('catalog').if(variables.showScriptTask)},
                    ${mutations.RemoveScriptTaskMutation.getFragment('catalog').if(variables.showScriptTask)},
                    ${mutations.UpdateScriptTaskMutation.getFragment('catalog').if(variables.showScriptTask)},
                    ScriptTaskConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showScriptTask) {
                        totalCount,
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
                                script,
                                ${mutations.RemoveScriptTaskMutation.getFragment('scripttask').if(variables.showScriptTask)},
                                ${mutations.UpdateScriptTaskMutation.getFragment('scripttask').if(variables.showScriptTask)}
                            }
                        }
                    },
                    ${mutations.CreateProcessTokenMutation.getFragment('catalog').if(variables.showProcessToken)},
                    ${mutations.RemoveProcessTokenMutation.getFragment('catalog').if(variables.showProcessToken)},
                    ${mutations.UpdateProcessTokenMutation.getFragment('catalog').if(variables.showProcessToken)},
                    ProcessTokenConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showProcessToken) {
                        totalCount,
                        edges {
                            node {
                                id,
                                data,
                                process,
                                ${mutations.RemoveProcessTokenMutation.getFragment('processtoken').if(variables.showProcessToken)},
                                ${mutations.UpdateProcessTokenMutation.getFragment('processtoken').if(variables.showProcessToken)}
                            }
                        }
                    },
                    ${mutations.CreateProcessDefMutation.getFragment('catalog').if(variables.showProcessDef)},
                    ${mutations.RemoveProcessDefMutation.getFragment('catalog').if(variables.showProcessDef)},
                    ${mutations.UpdateProcessDefMutation.getFragment('catalog').if(variables.showProcessDef)},
                    ProcessDefConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showProcessDef) {
                        totalCount,
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
                                ${mutations.RemoveProcessDefMutation.getFragment('processdef').if(variables.showProcessDef)},
                                ${mutations.UpdateProcessDefMutation.getFragment('processdef').if(variables.showProcessDef)}
                            }
                        }
                    },
                    ${mutations.CreateProcessMutation.getFragment('catalog').if(variables.showProcess)},
                    ${mutations.RemoveProcessMutation.getFragment('catalog').if(variables.showProcess)},
                    ${mutations.UpdateProcessMutation.getFragment('catalog').if(variables.showProcess)},
                    ProcessConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showProcess) {
                        totalCount,
                        edges {
                            node {
                                id,
                                name,
                                key,
                                status,
                                processDef,
                                isSubProcess,
                                callerId,
                                ${mutations.RemoveProcessMutation.getFragment('process').if(variables.showProcess)},
                                ${mutations.UpdateProcessMutation.getFragment('process').if(variables.showProcess)}
                            }
                        }
                    },
                    ${mutations.CreateParallelGatewayMutation.getFragment('catalog').if(variables.showParallelGateway)},
                    ${mutations.RemoveParallelGatewayMutation.getFragment('catalog').if(variables.showParallelGateway)},
                    ${mutations.UpdateParallelGatewayMutation.getFragment('catalog').if(variables.showParallelGateway)},
                    ParallelGatewayConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showParallelGateway) {
                        totalCount,
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
                                parallelType,
                                ${mutations.RemoveParallelGatewayMutation.getFragment('parallelgateway').if(variables.showParallelGateway)},
                                ${mutations.UpdateParallelGatewayMutation.getFragment('parallelgateway').if(variables.showParallelGateway)}
                            }
                        }
                    },
                    ${mutations.CreateNodeInstanceMutation.getFragment('catalog').if(variables.showNodeInstance)},
                    ${mutations.RemoveNodeInstanceMutation.getFragment('catalog').if(variables.showNodeInstance)},
                    ${mutations.UpdateNodeInstanceMutation.getFragment('catalog').if(variables.showNodeInstance)},
                    NodeInstanceConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showNodeInstance) {
                        totalCount,
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
                                ${mutations.RemoveNodeInstanceMutation.getFragment('nodeinstance').if(variables.showNodeInstance)},
                                ${mutations.UpdateNodeInstanceMutation.getFragment('nodeinstance').if(variables.showNodeInstance)}
                            }
                        }
                    },
                    ${mutations.CreateNodeDefMutation.getFragment('catalog').if(variables.showNodeDef)},
                    ${mutations.RemoveNodeDefMutation.getFragment('catalog').if(variables.showNodeDef)},
                    ${mutations.UpdateNodeDefMutation.getFragment('catalog').if(variables.showNodeDef)},
                    NodeDefConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showNodeDef) {
                        totalCount,
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
                                ${mutations.RemoveNodeDefMutation.getFragment('nodedef').if(variables.showNodeDef)},
                                ${mutations.UpdateNodeDefMutation.getFragment('nodedef').if(variables.showNodeDef)}
                            }
                        }
                    },
                    ${mutations.CreateLaneMutation.getFragment('catalog').if(variables.showLane)},
                    ${mutations.RemoveLaneMutation.getFragment('catalog').if(variables.showLane)},
                    ${mutations.UpdateLaneMutation.getFragment('catalog').if(variables.showLane)},
                    LaneConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showLane) {
                        totalCount,
                        edges {
                            node {
                                id,
                                name,
                                key,
                                extensions,
                                processDef,
                                counter,
                                nodeDefCollection,
                                ${mutations.RemoveLaneMutation.getFragment('lane').if(variables.showLane)},
                                ${mutations.UpdateLaneMutation.getFragment('lane').if(variables.showLane)}
                            }
                        }
                    },
                    ${mutations.CreateFlowDefMutation.getFragment('catalog').if(variables.showFlowDef)},
                    ${mutations.RemoveFlowDefMutation.getFragment('catalog').if(variables.showFlowDef)},
                    ${mutations.UpdateFlowDefMutation.getFragment('catalog').if(variables.showFlowDef)},
                    FlowDefConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showFlowDef) {
                        totalCount,
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
                                ${mutations.RemoveFlowDefMutation.getFragment('flowdef').if(variables.showFlowDef)},
                                ${mutations.UpdateFlowDefMutation.getFragment('flowdef').if(variables.showFlowDef)}
                            }
                        }
                    },
                    ${mutations.CreateExclusiveGatewayMutation.getFragment('catalog').if(variables.showExclusiveGateway)},
                    ${mutations.RemoveExclusiveGatewayMutation.getFragment('catalog').if(variables.showExclusiveGateway)},
                    ${mutations.UpdateExclusiveGatewayMutation.getFragment('catalog').if(variables.showExclusiveGateway)},
                    ExclusiveGatewayConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showExclusiveGateway) {
                        totalCount,
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
                                follow,
                                ${mutations.RemoveExclusiveGatewayMutation.getFragment('exclusivegateway').if(variables.showExclusiveGateway)},
                                ${mutations.UpdateExclusiveGatewayMutation.getFragment('exclusivegateway').if(variables.showExclusiveGateway)}
                            }
                        }
                    },
                    ${mutations.CreateEventMutation.getFragment('catalog').if(variables.showEvent)},
                    ${mutations.RemoveEventMutation.getFragment('catalog').if(variables.showEvent)},
                    ${mutations.UpdateEventMutation.getFragment('catalog').if(variables.showEvent)},
                    EventConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showEvent) {
                        totalCount,
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
                                ${mutations.RemoveEventMutation.getFragment('event').if(variables.showEvent)},
                                ${mutations.UpdateEventMutation.getFragment('event').if(variables.showEvent)}
                            }
                        }
                    },
                    ${mutations.CreateEndEventMutation.getFragment('catalog').if(variables.showEndEvent)},
                    ${mutations.RemoveEndEventMutation.getFragment('catalog').if(variables.showEndEvent)},
                    ${mutations.UpdateEndEventMutation.getFragment('catalog').if(variables.showEndEvent)},
                    EndEventConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showEndEvent) {
                        totalCount,
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
                                ${mutations.RemoveEndEventMutation.getFragment('endevent').if(variables.showEndEvent)},
                                ${mutations.UpdateEndEventMutation.getFragment('endevent').if(variables.showEndEvent)}
                            }
                        }
                    },
                    ${mutations.CreateBoundaryEventMutation.getFragment('catalog').if(variables.showBoundaryEvent)},
                    ${mutations.RemoveBoundaryEventMutation.getFragment('catalog').if(variables.showBoundaryEvent)},
                    ${mutations.UpdateBoundaryEventMutation.getFragment('catalog').if(variables.showBoundaryEvent)},
                    BoundaryEventConnection(query: $query, orderBy: $orderBy, first: $first, offset: $offset) @include(if: $showBoundaryEvent) {
                        totalCount,
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
                                ${mutations.RemoveBoundaryEventMutation.getFragment('boundaryevent').if(variables.showBoundaryEvent)},
                                ${mutations.UpdateBoundaryEventMutation.getFragment('boundaryevent').if(variables.showBoundaryEvent)}
                            }
                        }
                    },
                }
            `;
            return query;
        }
    },
    create: (className, catalog, row) => {
        let mutation = null;
        switch (className) {
            case 'Timer': {

                mutation = new mutations.CreateTimerMutation({
                    id: row.id,
                    timerType: row.timerType,
                    timerIsoString: row.timerIsoString,
                    timerRule: row.timerRule,
                    eventName: row.eventName,
                    lastElapsed: row.lastElapsed,
                    catalog
                });
                break;
            }
            case 'Reservation': {

                mutation = new mutations.CreateReservationMutation({
                    id: row.id,
                    name: row.name,
                    category: row.category,
                    isOneWay: row.isOneWay,
                    navigationSystem: row.navigationSystem,
                    additionalDriver: row.additionalDriver,
                    price: row.price,
                    catalog
                });
                break;
            }
            case 'User': {

                mutation = new mutations.CreateUserMutation({
                    id: row.id,
                    name: row.name,
                    password: row.password,
                    roles: row.roles,
                    catalog
                });
                break;
            }
            case 'SessionStore': {

                mutation = new mutations.CreateSessionStoreMutation({
                    id: row.id,
                    identityId: row.identityId,
                    systemUserId: row.systemUserId,
                    data: row.data,
                    roles: row.roles,
                    catalog
                });
                break;
            }
            case 'UserTask': {

                mutation = new mutations.CreateUserTaskMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'SubprocessExternal': {

                mutation = new mutations.CreateSubprocessExternalMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'SubprocessInternal': {

                mutation = new mutations.CreateSubprocessInternalMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'StartEvent': {

                mutation = new mutations.CreateStartEventMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'CatchEvent': {

                mutation = new mutations.CreateCatchEventMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'ThrowEvent': {

                mutation = new mutations.CreateThrowEventMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'ServiceTask': {

                mutation = new mutations.CreateServiceTaskMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'ScriptTask': {

                mutation = new mutations.CreateScriptTaskMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    script: row.script,
                    catalog
                });
                break;
            }
            case 'ProcessToken': {

                mutation = new mutations.CreateProcessTokenMutation({
                    id: row.id,
                    data: row.data,
                    process: row.process,
                    catalog
                });
                break;
            }
            case 'ProcessDef': {

                mutation = new mutations.CreateProcessDefMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    defId: row.defId,
                    xml: row.xml,
                    extensions: row.extensions,
                    internalName: row.internalName,
                    path: row.path,
                    category: row.category,
                    module: row.module,
                    readonly: row.readonly,
                    version: row.version,
                    counter: row.counter,
                    nodeDefCollection: row.nodeDefCollection,
                    flowDefCollection: row.flowDefCollection,
                    laneCollection: row.laneCollection,
                    catalog
                });
                break;
            }
            case 'Process': {

                mutation = new mutations.CreateProcessMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    status: row.status,
                    processDef: row.processDef,
                    isSubProcess: row.isSubProcess,
                    callerId: row.callerId,
                    catalog
                });
                break;
            }
            case 'ParallelGateway': {

                mutation = new mutations.CreateParallelGatewayMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    parallelType: row.parallelType,
                    catalog
                });
                break;
            }
            case 'NodeInstance': {

                mutation = new mutations.CreateNodeInstanceMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'NodeDef': {

                mutation = new mutations.CreateNodeDefMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    processDef: row.processDef,
                    lane: row.lane,
                    type: row.type,
                    extensions: row.extensions,
                    attachedToNode: row.attachedToNode,
                    events: row.events,
                    script: row.script,
                    eventType: row.eventType,
                    cancelActivity: row.cancelActivity,
                    subProcessKey: row.subProcessKey,
                    subProcessDef: row.subProcessDef,
                    counter: row.counter,
                    timerDefinitionType: row.timerDefinitionType,
                    timerDefinition: row.timerDefinition,
                    startContext: row.startContext,
                    startContextEntityType: row.startContextEntityType,
                    signal: row.signal,
                    message: row.message,
                    condition: row.condition,
                    errorName: row.errorName,
                    errorCode: row.errorCode,
                    catalog
                });
                break;
            }
            case 'Lane': {

                mutation = new mutations.CreateLaneMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    extensions: row.extensions,
                    processDef: row.processDef,
                    counter: row.counter,
                    nodeDefCollection: row.nodeDefCollection,
                    catalog
                });
                break;
            }
            case 'FlowDef': {

                mutation = new mutations.CreateFlowDefMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    processDef: row.processDef,
                    source: row.source,
                    target: row.target,
                    condition: row.condition,
                    extensions: row.extensions,
                    counter: row.counter,
                    catalog
                });
                break;
            }
            case 'ExclusiveGateway': {

                mutation = new mutations.CreateExclusiveGatewayMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    follow: row.follow,
                    catalog
                });
                break;
            }
            case 'Event': {

                mutation = new mutations.CreateEventMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'EndEvent': {

                mutation = new mutations.CreateEndEventMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            case 'BoundaryEvent': {

                mutation = new mutations.CreateBoundaryEventMutation({
                    id: row.id,
                    name: row.name,
                    key: row.key,
                    process: row.process,
                    nodeDef: row.nodeDef,
                    type: row.type,
                    state: row.state,
                    participant: row.participant,
                    application: row.application,
                    processToken: row.processToken,
                    instanceCounter: row.instanceCounter,
                    catalog
                });
                break;
            }
            default: {
                mutation = null;
            }
        }
        if (mutation) {
            Relay.Store.commitUpdate(
                mutation
            );
        }

    },
    update: (className, catalog, row, cellName, cellValue) => {
        const entity = {
            id: row.id
        };

        const updatedEntity = row;
        delete updatedEntity.id;

        let mutation = null;
        switch (className) {
            case 'Timer': {

                mutation = new mutations.UpdateTimerMutation({
                    catalog,
                    timer: entity,
                    updatedTimer: updatedEntity
                });
                break;
            }
            case 'Reservation': {

                mutation = new mutations.UpdateReservationMutation({
                    catalog,
                    reservation: entity,
                    updatedReservation: updatedEntity
                });
                break;
            }
            case 'User': {

                mutation = new mutations.UpdateUserMutation({
                    catalog,
                    user: entity,
                    updatedUser: updatedEntity
                });
                break;
            }
            case 'SessionStore': {

                mutation = new mutations.UpdateSessionStoreMutation({
                    catalog,
                    sessionstore: entity,
                    updatedSessionStore: updatedEntity
                });
                break;
            }
            case 'UserTask': {

                mutation = new mutations.UpdateUserTaskMutation({
                    catalog,
                    usertask: entity,
                    updatedUserTask: updatedEntity
                });
                break;
            }
            case 'SubprocessExternal': {

                mutation = new mutations.UpdateSubprocessExternalMutation({
                    catalog,
                    subprocessexternal: entity,
                    updatedSubprocessExternal: updatedEntity
                });
                break;
            }
            case 'SubprocessInternal': {

                mutation = new mutations.UpdateSubprocessInternalMutation({
                    catalog,
                    subprocessinternal: entity,
                    updatedSubprocessInternal: updatedEntity
                });
                break;
            }
            case 'StartEvent': {

                mutation = new mutations.UpdateStartEventMutation({
                    catalog,
                    startevent: entity,
                    updatedStartEvent: updatedEntity
                });
                break;
            }
            case 'CatchEvent': {

                mutation = new mutations.UpdateCatchEventMutation({
                    catalog,
                    catchevent: entity,
                    updatedCatchEvent: updatedEntity
                });
                break;
            }
            case 'ThrowEvent': {

                mutation = new mutations.UpdateThrowEventMutation({
                    catalog,
                    throwevent: entity,
                    updatedThrowEvent: updatedEntity
                });
                break;
            }
            case 'ServiceTask': {

                mutation = new mutations.UpdateServiceTaskMutation({
                    catalog,
                    servicetask: entity,
                    updatedServiceTask: updatedEntity
                });
                break;
            }
            case 'ScriptTask': {

                mutation = new mutations.UpdateScriptTaskMutation({
                    catalog,
                    scripttask: entity,
                    updatedScriptTask: updatedEntity
                });
                break;
            }
            case 'ProcessToken': {

                mutation = new mutations.UpdateProcessTokenMutation({
                    catalog,
                    processtoken: entity,
                    updatedProcessToken: updatedEntity
                });
                break;
            }
            case 'ProcessDef': {

                mutation = new mutations.UpdateProcessDefMutation({
                    catalog,
                    processdef: entity,
                    updatedProcessDef: updatedEntity
                });
                break;
            }
            case 'Process': {

                mutation = new mutations.UpdateProcessMutation({
                    catalog,
                    process: entity,
                    updatedProcess: updatedEntity
                });
                break;
            }
            case 'ParallelGateway': {

                mutation = new mutations.UpdateParallelGatewayMutation({
                    catalog,
                    parallelgateway: entity,
                    updatedParallelGateway: updatedEntity
                });
                break;
            }
            case 'NodeInstance': {

                mutation = new mutations.UpdateNodeInstanceMutation({
                    catalog,
                    nodeinstance: entity,
                    updatedNodeInstance: updatedEntity
                });
                break;
            }
            case 'NodeDef': {

                mutation = new mutations.UpdateNodeDefMutation({
                    catalog,
                    nodedef: entity,
                    updatedNodeDef: updatedEntity
                });
                break;
            }
            case 'Lane': {

                mutation = new mutations.UpdateLaneMutation({
                    catalog,
                    lane: entity,
                    updatedLane: updatedEntity
                });
                break;
            }
            case 'FlowDef': {

                mutation = new mutations.UpdateFlowDefMutation({
                    catalog,
                    flowdef: entity,
                    updatedFlowDef: updatedEntity
                });
                break;
            }
            case 'ExclusiveGateway': {

                mutation = new mutations.UpdateExclusiveGatewayMutation({
                    catalog,
                    exclusivegateway: entity,
                    updatedExclusiveGateway: updatedEntity
                });
                break;
            }
            case 'Event': {

                mutation = new mutations.UpdateEventMutation({
                    catalog,
                    event: entity,
                    updatedEvent: updatedEntity
                });
                break;
            }
            case 'EndEvent': {

                mutation = new mutations.UpdateEndEventMutation({
                    catalog,
                    endevent: entity,
                    updatedEndEvent: updatedEntity
                });
                break;
            }
            case 'BoundaryEvent': {

                mutation = new mutations.UpdateBoundaryEventMutation({
                    catalog,
                    boundaryevent: entity,
                    updatedBoundaryEvent: updatedEntity
                });
                break;
            }
            default: {
                mutation = null;
            }
        }

        if (mutation) {
            Relay.Store.commitUpdate(
                mutation
            );
        }
    },
    remove: (className, catalog, row, entity) => {
        let mutation = null;
        switch (className) {
            case 'Timer': {
                mutation = new mutations.RemoveTimerMutation({ catalog, timer: entity });
                break;
            }
            case 'Reservation': {
                mutation = new mutations.RemoveReservationMutation({ catalog, reservation: entity });
                break;
            }
            case 'User': {
                mutation = new mutations.RemoveUserMutation({ catalog, user: entity });
                break;
            }
            case 'SessionStore': {
                mutation = new mutations.RemoveSessionStoreMutation({ catalog, sessionstore: entity });
                break;
            }
            case 'UserTask': {
                mutation = new mutations.RemoveUserTaskMutation({ catalog, usertask: entity });
                break;
            }
            case 'SubprocessExternal': {
                mutation = new mutations.RemoveSubprocessExternalMutation({ catalog, subprocessexternal: entity });
                break;
            }
            case 'SubprocessInternal': {
                mutation = new mutations.RemoveSubprocessInternalMutation({ catalog, subprocessinternal: entity });
                break;
            }
            case 'StartEvent': {
                mutation = new mutations.RemoveStartEventMutation({ catalog, startevent: entity });
                break;
            }
            case 'CatchEvent': {
                mutation = new mutations.RemoveCatchEventMutation({ catalog, catchevent: entity });
                break;
            }
            case 'ThrowEvent': {
                mutation = new mutations.RemoveThrowEventMutation({ catalog, throwevent: entity });
                break;
            }
            case 'ServiceTask': {
                mutation = new mutations.RemoveServiceTaskMutation({ catalog, servicetask: entity });
                break;
            }
            case 'ScriptTask': {
                mutation = new mutations.RemoveScriptTaskMutation({ catalog, scripttask: entity });
                break;
            }
            case 'ProcessToken': {
                mutation = new mutations.RemoveProcessTokenMutation({ catalog, processtoken: entity });
                break;
            }
            case 'ProcessDef': {
                mutation = new mutations.RemoveProcessDefMutation({ catalog, processdef: entity });
                break;
            }
            case 'Process': {
                mutation = new mutations.RemoveProcessMutation({ catalog, process: entity });
                break;
            }
            case 'ParallelGateway': {
                mutation = new mutations.RemoveParallelGatewayMutation({ catalog, parallelgateway: entity });
                break;
            }
            case 'NodeInstance': {
                mutation = new mutations.RemoveNodeInstanceMutation({ catalog, nodeinstance: entity });
                break;
            }
            case 'NodeDef': {
                mutation = new mutations.RemoveNodeDefMutation({ catalog, nodedef: entity });
                break;
            }
            case 'Lane': {
                mutation = new mutations.RemoveLaneMutation({ catalog, lane: entity });
                break;
            }
            case 'FlowDef': {
                mutation = new mutations.RemoveFlowDefMutation({ catalog, flowdef: entity });
                break;
            }
            case 'ExclusiveGateway': {
                mutation = new mutations.RemoveExclusiveGatewayMutation({ catalog, exclusivegateway: entity });
                break;
            }
            case 'Event': {
                mutation = new mutations.RemoveEventMutation({ catalog, event: entity });
                break;
            }
            case 'EndEvent': {
                mutation = new mutations.RemoveEndEventMutation({ catalog, endevent: entity });
                break;
            }
            case 'BoundaryEvent': {
                mutation = new mutations.RemoveBoundaryEventMutation({ catalog, boundaryevent: entity });
                break;
            }
            default: {
                mutation = null;
            }
        }

        if (mutation) {
            Relay.Store.commitUpdate(
                mutation
            );
        }
    }
};

export default CrudTableHelper;
