'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactRelay = require('react-relay');

var _reactRelay2 = _interopRequireDefault(_reactRelay);

var _index = require('./mutations/index');

var mutations = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

var CrudTableHelper = {
    initialVariables: function initialVariables() {
        return {
            showTimer: false,
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
            showUser: false,
            showSessionStore: false
        };
    },
    preparedVariables: function preparedVariables(className) {
        return {
            className: className,
            showTimer: className === 'Timer',
            showUserTask: className === 'UserTask',
            showSubprocessExternal: className === 'SubprocessExternal',
            showSubprocessInternal: className === 'SubprocessInternal',
            showStartEvent: className === 'StartEvent',
            showCatchEvent: className === 'CatchEvent',
            showThrowEvent: className === 'ThrowEvent',
            showServiceTask: className === 'ServiceTask',
            showScriptTask: className === 'ScriptTask',
            showProcessToken: className === 'ProcessToken',
            showProcessDef: className === 'ProcessDef',
            showProcess: className === 'Process',
            showParallelGateway: className === 'ParallelGateway',
            showNodeInstance: className === 'NodeInstance',
            showNodeDef: className === 'NodeDef',
            showLane: className === 'Lane',
            showFlowDef: className === 'FlowDef',
            showExclusiveGateway: className === 'ExclusiveGateway',
            showEvent: className === 'Event',
            showEndEvent: className === 'EndEvent',
            showBoundaryEvent: className === 'BoundaryEvent',
            showUser: className === 'User',
            showSessionStore: className === 'SessionStore'
        };
    },
    fragments: {
        catalog: function catalog(variables) {
            var query = function (RQL_0, RQL_1, RQL_2, RQL_3, RQL_4, RQL_5, RQL_6, RQL_7, RQL_8, RQL_9, RQL_10, RQL_11, RQL_12, RQL_13, RQL_14, RQL_15, RQL_16, RQL_17, RQL_18, RQL_19, RQL_20, RQL_21, RQL_22, RQL_23, RQL_24, RQL_25, RQL_26, RQL_27, RQL_28, RQL_29, RQL_30, RQL_31, RQL_32, RQL_33, RQL_34, RQL_35, RQL_36, RQL_37, RQL_38, RQL_39, RQL_40, RQL_41, RQL_42, RQL_43, RQL_44, RQL_45, RQL_46, RQL_47, RQL_48, RQL_49, RQL_50, RQL_51, RQL_52, RQL_53, RQL_54, RQL_55, RQL_56, RQL_57, RQL_58, RQL_59, RQL_60, RQL_61, RQL_62, RQL_63, RQL_64, RQL_65, RQL_66, RQL_67, RQL_68, RQL_69, RQL_70, RQL_71, RQL_72, RQL_73, RQL_74, RQL_75, RQL_76, RQL_77, RQL_78, RQL_79, RQL_80, RQL_81, RQL_82, RQL_83, RQL_84, RQL_85, RQL_86, RQL_87, RQL_88, RQL_89, RQL_90, RQL_91, RQL_92, RQL_93, RQL_94, RQL_95, RQL_96, RQL_97, RQL_98, RQL_99, RQL_100, RQL_101, RQL_102, RQL_103, RQL_104, RQL_105, RQL_106, RQL_107, RQL_108, RQL_109, RQL_110, RQL_111, RQL_112, RQL_113, RQL_114) {
                return {
                    children: [].concat.apply([], [{
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'timerType',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, {
                                    fieldName: 'timerIsoString',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'timerRule',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'eventName',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'lastElapsed',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Date'
                                }, _reactRelay2.default.QL.__frag(RQL_3), _reactRelay2.default.QL.__frag(RQL_4)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'Timer'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'TimerEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showTimer'
                                }
                            }]
                        }],
                        fieldName: 'TimerConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'TimerConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_8), _reactRelay2.default.QL.__frag(RQL_9)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'UserTask'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'UserTaskEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showUserTask'
                                }
                            }]
                        }],
                        fieldName: 'UserTaskConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'UserTaskConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_13), _reactRelay2.default.QL.__frag(RQL_14)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'SubprocessExternal'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'SubprocessExternalEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showSubprocessExternal'
                                }
                            }]
                        }],
                        fieldName: 'SubprocessExternalConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'SubprocessExternalConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_18), _reactRelay2.default.QL.__frag(RQL_19)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'SubprocessInternal'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'SubprocessInternalEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showSubprocessInternal'
                                }
                            }]
                        }],
                        fieldName: 'SubprocessInternalConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'SubprocessInternalConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_23), _reactRelay2.default.QL.__frag(RQL_24)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'StartEvent'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'StartEventEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showStartEvent'
                                }
                            }]
                        }],
                        fieldName: 'StartEventConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'StartEventConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_28), _reactRelay2.default.QL.__frag(RQL_29)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'CatchEvent'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'CatchEventEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showCatchEvent'
                                }
                            }]
                        }],
                        fieldName: 'CatchEventConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'CatchEventConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_33), _reactRelay2.default.QL.__frag(RQL_34)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'ThrowEvent'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'ThrowEventEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showThrowEvent'
                                }
                            }]
                        }],
                        fieldName: 'ThrowEventConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'ThrowEventConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_38), _reactRelay2.default.QL.__frag(RQL_39)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'ServiceTask'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'ServiceTaskEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showServiceTask'
                                }
                            }]
                        }],
                        fieldName: 'ServiceTaskConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'ServiceTaskConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, {
                                    fieldName: 'script',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, _reactRelay2.default.QL.__frag(RQL_43), _reactRelay2.default.QL.__frag(RQL_44)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'ScriptTask'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'ScriptTaskEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showScriptTask'
                                }
                            }]
                        }],
                        fieldName: 'ScriptTaskConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'ScriptTaskConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'data',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, _reactRelay2.default.QL.__frag(RQL_48), _reactRelay2.default.QL.__frag(RQL_49)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'ProcessToken'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'ProcessTokenEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showProcessToken'
                                }
                            }]
                        }],
                        fieldName: 'ProcessTokenConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'ProcessTokenConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'defId',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'xml',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'extensions',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'internalName',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'path',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'category',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'module',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'readonly',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Boolean'
                                }, {
                                    fieldName: 'version',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'counter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, {
                                    fieldName: 'nodeDefCollection',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isConnection: true,
                                        isFindable: true
                                    },
                                    type: 'ProcessDefEntity_nodeDefCollection_ConnectionConnection'
                                }, {
                                    fieldName: 'flowDefCollection',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isConnection: true,
                                        isFindable: true
                                    },
                                    type: 'ProcessDefEntity_flowDefCollection_ConnectionConnection'
                                }, {
                                    fieldName: 'laneCollection',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isConnection: true,
                                        isFindable: true
                                    },
                                    type: 'ProcessDefEntity_laneCollection_ConnectionConnection'
                                }, _reactRelay2.default.QL.__frag(RQL_53), _reactRelay2.default.QL.__frag(RQL_54)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'ProcessDef'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'ProcessDefEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showProcessDef'
                                }
                            }]
                        }],
                        fieldName: 'ProcessDefConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'ProcessDefConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'status',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessDef'
                                }, {
                                    fieldName: 'isSubProcess',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Boolean'
                                }, {
                                    fieldName: 'callerId',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, _reactRelay2.default.QL.__frag(RQL_58), _reactRelay2.default.QL.__frag(RQL_59)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'Process'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'ProcessEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showProcess'
                                }
                            }]
                        }],
                        fieldName: 'ProcessConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'ProcessConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, {
                                    fieldName: 'parallelType',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, _reactRelay2.default.QL.__frag(RQL_63), _reactRelay2.default.QL.__frag(RQL_64)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'ParallelGateway'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'ParallelGatewayEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showParallelGateway'
                                }
                            }]
                        }],
                        fieldName: 'ParallelGatewayConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'ParallelGatewayConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_68), _reactRelay2.default.QL.__frag(RQL_69)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'NodeInstance'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'NodeInstanceEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showNodeInstance'
                                }
                            }]
                        }],
                        fieldName: 'NodeInstanceConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'NodeInstanceConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessDef'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'lane',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Lane'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'extensions',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'attachedToNode',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'events',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'script',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'eventType',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'cancelActivity',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Boolean'
                                }, {
                                    fieldName: 'subProcessKey',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'subProcessDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'counter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, {
                                    fieldName: 'timerDefinitionType',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, {
                                    fieldName: 'timerDefinition',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'startContext',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'startContextEntityType',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'signal',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'message',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'condition',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'errorName',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'errorCode',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, _reactRelay2.default.QL.__frag(RQL_73), _reactRelay2.default.QL.__frag(RQL_74)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'NodeDef'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'NodeDefEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showNodeDef'
                                }
                            }]
                        }],
                        fieldName: 'NodeDefConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'NodeDefConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'extensions',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessDef'
                                }, {
                                    fieldName: 'counter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, {
                                    fieldName: 'nodeDefCollection',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true,
                                        isConnection: true,
                                        isFindable: true
                                    },
                                    type: 'LaneEntity_nodeDefCollection_ConnectionConnection'
                                }, _reactRelay2.default.QL.__frag(RQL_78), _reactRelay2.default.QL.__frag(RQL_79)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'Lane'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'LaneEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showLane'
                                }
                            }]
                        }],
                        fieldName: 'LaneConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'LaneConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessDef'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'source',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'target',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'condition',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'extensions',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'counter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_83), _reactRelay2.default.QL.__frag(RQL_84)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'FlowDef'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'FlowDefEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showFlowDef'
                                }
                            }]
                        }],
                        fieldName: 'FlowDefConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'FlowDefConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, {
                                    fieldName: 'follow',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, _reactRelay2.default.QL.__frag(RQL_88), _reactRelay2.default.QL.__frag(RQL_89)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'ExclusiveGateway'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'ExclusiveGatewayEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showExclusiveGateway'
                                }
                            }]
                        }],
                        fieldName: 'ExclusiveGatewayConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'ExclusiveGatewayConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_93), _reactRelay2.default.QL.__frag(RQL_94)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'Event'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'EventEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showEvent'
                                }
                            }]
                        }],
                        fieldName: 'EventConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'EventConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_98), _reactRelay2.default.QL.__frag(RQL_99)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'EndEvent'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'EndEventEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showEndEvent'
                                }
                            }]
                        }],
                        fieldName: 'EndEventConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'EndEventConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'key',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'process',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'Process'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'nodeDef',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'NodeDef'
                                }, {
                                    fieldName: 'type',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'state',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'participant',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'application',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    children: [{
                                        fieldName: 'id',
                                        kind: 'Field',
                                        metadata: {
                                            isGenerated: true,
                                            isRequisite: true
                                        },
                                        type: 'ID'
                                    }],
                                    fieldName: 'processToken',
                                    kind: 'Field',
                                    metadata: {
                                        canHaveSubselections: true
                                    },
                                    type: 'ProcessToken'
                                }, {
                                    fieldName: 'instanceCounter',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'Float'
                                }, _reactRelay2.default.QL.__frag(RQL_103), _reactRelay2.default.QL.__frag(RQL_104)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'BoundaryEvent'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'BoundaryEventEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showBoundaryEvent'
                                }
                            }]
                        }],
                        fieldName: 'BoundaryEventConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'BoundaryEventConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'name',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'password',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'roles',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, _reactRelay2.default.QL.__frag(RQL_108), _reactRelay2.default.QL.__frag(RQL_109)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'User'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'UserEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showUser'
                                }
                            }]
                        }],
                        fieldName: 'UserConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'UserConnection'
                    }, {
                        calls: [{
                            kind: 'Call',
                            metadata: {},
                            name: 'query',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'query'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {},
                            name: 'orderBy',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'orderBy'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'first',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'first'
                            }
                        }, {
                            kind: 'Call',
                            metadata: {
                                type: 'Int'
                            },
                            name: 'offset',
                            value: {
                                kind: 'CallVariable',
                                callVariableName: 'offset'
                            }
                        }],
                        children: [{
                            fieldName: 'totalCount',
                            kind: 'Field',
                            metadata: {},
                            type: 'Int'
                        }, {
                            children: [{
                                children: [].concat.apply([], [{
                                    fieldName: 'id',
                                    kind: 'Field',
                                    metadata: {
                                        isRequisite: true
                                    },
                                    type: 'ID'
                                }, {
                                    fieldName: 'identityId',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'systemUserId',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'data',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, {
                                    fieldName: 'roles',
                                    kind: 'Field',
                                    metadata: {},
                                    type: 'String'
                                }, _reactRelay2.default.QL.__frag(RQL_113), _reactRelay2.default.QL.__frag(RQL_114)]),
                                fieldName: 'node',
                                kind: 'Field',
                                metadata: {
                                    canHaveSubselections: true,
                                    isRequisite: true
                                },
                                type: 'SessionStore'
                            }, {
                                fieldName: 'cursor',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'String'
                            }],
                            fieldName: 'edges',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isPlural: true
                            },
                            type: 'SessionStoreEdge'
                        }, {
                            children: [{
                                fieldName: 'hasNextPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }, {
                                fieldName: 'hasPreviousPage',
                                kind: 'Field',
                                metadata: {
                                    isGenerated: true,
                                    isRequisite: true
                                },
                                type: 'Boolean'
                            }],
                            fieldName: 'pageInfo',
                            kind: 'Field',
                            metadata: {
                                canHaveSubselections: true,
                                isGenerated: true,
                                isRequisite: true
                            },
                            type: 'PageInfo'
                        }],
                        directives: [{
                            kind: 'Directive',
                            name: 'include',
                            args: [{
                                name: 'if',
                                value: {
                                    kind: 'CallVariable',
                                    callVariableName: 'showSessionStore'
                                }
                            }]
                        }],
                        fieldName: 'SessionStoreConnection',
                        kind: 'Field',
                        metadata: {
                            canHaveSubselections: true,
                            isConnection: true,
                            isFindable: true
                        },
                        type: 'SessionStoreConnection'
                    }, {
                        fieldName: 'id',
                        kind: 'Field',
                        metadata: {
                            isGenerated: true,
                            isRequisite: true
                        },
                        type: 'ID'
                    }, _reactRelay2.default.QL.__frag(RQL_0), _reactRelay2.default.QL.__frag(RQL_1), _reactRelay2.default.QL.__frag(RQL_2), _reactRelay2.default.QL.__frag(RQL_5), _reactRelay2.default.QL.__frag(RQL_6), _reactRelay2.default.QL.__frag(RQL_7), _reactRelay2.default.QL.__frag(RQL_10), _reactRelay2.default.QL.__frag(RQL_11), _reactRelay2.default.QL.__frag(RQL_12), _reactRelay2.default.QL.__frag(RQL_15), _reactRelay2.default.QL.__frag(RQL_16), _reactRelay2.default.QL.__frag(RQL_17), _reactRelay2.default.QL.__frag(RQL_20), _reactRelay2.default.QL.__frag(RQL_21), _reactRelay2.default.QL.__frag(RQL_22), _reactRelay2.default.QL.__frag(RQL_25), _reactRelay2.default.QL.__frag(RQL_26), _reactRelay2.default.QL.__frag(RQL_27), _reactRelay2.default.QL.__frag(RQL_30), _reactRelay2.default.QL.__frag(RQL_31), _reactRelay2.default.QL.__frag(RQL_32), _reactRelay2.default.QL.__frag(RQL_35), _reactRelay2.default.QL.__frag(RQL_36), _reactRelay2.default.QL.__frag(RQL_37), _reactRelay2.default.QL.__frag(RQL_40), _reactRelay2.default.QL.__frag(RQL_41), _reactRelay2.default.QL.__frag(RQL_42), _reactRelay2.default.QL.__frag(RQL_45), _reactRelay2.default.QL.__frag(RQL_46), _reactRelay2.default.QL.__frag(RQL_47), _reactRelay2.default.QL.__frag(RQL_50), _reactRelay2.default.QL.__frag(RQL_51), _reactRelay2.default.QL.__frag(RQL_52), _reactRelay2.default.QL.__frag(RQL_55), _reactRelay2.default.QL.__frag(RQL_56), _reactRelay2.default.QL.__frag(RQL_57), _reactRelay2.default.QL.__frag(RQL_60), _reactRelay2.default.QL.__frag(RQL_61), _reactRelay2.default.QL.__frag(RQL_62), _reactRelay2.default.QL.__frag(RQL_65), _reactRelay2.default.QL.__frag(RQL_66), _reactRelay2.default.QL.__frag(RQL_67), _reactRelay2.default.QL.__frag(RQL_70), _reactRelay2.default.QL.__frag(RQL_71), _reactRelay2.default.QL.__frag(RQL_72), _reactRelay2.default.QL.__frag(RQL_75), _reactRelay2.default.QL.__frag(RQL_76), _reactRelay2.default.QL.__frag(RQL_77), _reactRelay2.default.QL.__frag(RQL_80), _reactRelay2.default.QL.__frag(RQL_81), _reactRelay2.default.QL.__frag(RQL_82), _reactRelay2.default.QL.__frag(RQL_85), _reactRelay2.default.QL.__frag(RQL_86), _reactRelay2.default.QL.__frag(RQL_87), _reactRelay2.default.QL.__frag(RQL_90), _reactRelay2.default.QL.__frag(RQL_91), _reactRelay2.default.QL.__frag(RQL_92), _reactRelay2.default.QL.__frag(RQL_95), _reactRelay2.default.QL.__frag(RQL_96), _reactRelay2.default.QL.__frag(RQL_97), _reactRelay2.default.QL.__frag(RQL_100), _reactRelay2.default.QL.__frag(RQL_101), _reactRelay2.default.QL.__frag(RQL_102), _reactRelay2.default.QL.__frag(RQL_105), _reactRelay2.default.QL.__frag(RQL_106), _reactRelay2.default.QL.__frag(RQL_107), _reactRelay2.default.QL.__frag(RQL_110), _reactRelay2.default.QL.__frag(RQL_111), _reactRelay2.default.QL.__frag(RQL_112)]),
                    id: _reactRelay2.default.QL.__id(),
                    kind: 'Fragment',
                    metadata: {},
                    name: 'Crud_helper_CatalogRelayQL',
                    type: 'Catalog'
                };
            }(mutations.CreateTimerMutation.getFragment('catalog').if(variables.showTimer), mutations.RemoveTimerMutation.getFragment('catalog').if(variables.showTimer), mutations.UpdateTimerMutation.getFragment('catalog').if(variables.showTimer), mutations.RemoveTimerMutation.getFragment('timer').if(variables.showTimer), mutations.UpdateTimerMutation.getFragment('timer').if(variables.showTimer), mutations.CreateUserTaskMutation.getFragment('catalog').if(variables.showUserTask), mutations.RemoveUserTaskMutation.getFragment('catalog').if(variables.showUserTask), mutations.UpdateUserTaskMutation.getFragment('catalog').if(variables.showUserTask), mutations.RemoveUserTaskMutation.getFragment('usertask').if(variables.showUserTask), mutations.UpdateUserTaskMutation.getFragment('usertask').if(variables.showUserTask), mutations.CreateSubprocessExternalMutation.getFragment('catalog').if(variables.showSubprocessExternal), mutations.RemoveSubprocessExternalMutation.getFragment('catalog').if(variables.showSubprocessExternal), mutations.UpdateSubprocessExternalMutation.getFragment('catalog').if(variables.showSubprocessExternal), mutations.RemoveSubprocessExternalMutation.getFragment('subprocessexternal').if(variables.showSubprocessExternal), mutations.UpdateSubprocessExternalMutation.getFragment('subprocessexternal').if(variables.showSubprocessExternal), mutations.CreateSubprocessInternalMutation.getFragment('catalog').if(variables.showSubprocessInternal), mutations.RemoveSubprocessInternalMutation.getFragment('catalog').if(variables.showSubprocessInternal), mutations.UpdateSubprocessInternalMutation.getFragment('catalog').if(variables.showSubprocessInternal), mutations.RemoveSubprocessInternalMutation.getFragment('subprocessinternal').if(variables.showSubprocessInternal), mutations.UpdateSubprocessInternalMutation.getFragment('subprocessinternal').if(variables.showSubprocessInternal), mutations.CreateStartEventMutation.getFragment('catalog').if(variables.showStartEvent), mutations.RemoveStartEventMutation.getFragment('catalog').if(variables.showStartEvent), mutations.UpdateStartEventMutation.getFragment('catalog').if(variables.showStartEvent), mutations.RemoveStartEventMutation.getFragment('startevent').if(variables.showStartEvent), mutations.UpdateStartEventMutation.getFragment('startevent').if(variables.showStartEvent), mutations.CreateCatchEventMutation.getFragment('catalog').if(variables.showCatchEvent), mutations.RemoveCatchEventMutation.getFragment('catalog').if(variables.showCatchEvent), mutations.UpdateCatchEventMutation.getFragment('catalog').if(variables.showCatchEvent), mutations.RemoveCatchEventMutation.getFragment('catchevent').if(variables.showCatchEvent), mutations.UpdateCatchEventMutation.getFragment('catchevent').if(variables.showCatchEvent), mutations.CreateThrowEventMutation.getFragment('catalog').if(variables.showThrowEvent), mutations.RemoveThrowEventMutation.getFragment('catalog').if(variables.showThrowEvent), mutations.UpdateThrowEventMutation.getFragment('catalog').if(variables.showThrowEvent), mutations.RemoveThrowEventMutation.getFragment('throwevent').if(variables.showThrowEvent), mutations.UpdateThrowEventMutation.getFragment('throwevent').if(variables.showThrowEvent), mutations.CreateServiceTaskMutation.getFragment('catalog').if(variables.showServiceTask), mutations.RemoveServiceTaskMutation.getFragment('catalog').if(variables.showServiceTask), mutations.UpdateServiceTaskMutation.getFragment('catalog').if(variables.showServiceTask), mutations.RemoveServiceTaskMutation.getFragment('servicetask').if(variables.showServiceTask), mutations.UpdateServiceTaskMutation.getFragment('servicetask').if(variables.showServiceTask), mutations.CreateScriptTaskMutation.getFragment('catalog').if(variables.showScriptTask), mutations.RemoveScriptTaskMutation.getFragment('catalog').if(variables.showScriptTask), mutations.UpdateScriptTaskMutation.getFragment('catalog').if(variables.showScriptTask), mutations.RemoveScriptTaskMutation.getFragment('scripttask').if(variables.showScriptTask), mutations.UpdateScriptTaskMutation.getFragment('scripttask').if(variables.showScriptTask), mutations.CreateProcessTokenMutation.getFragment('catalog').if(variables.showProcessToken), mutations.RemoveProcessTokenMutation.getFragment('catalog').if(variables.showProcessToken), mutations.UpdateProcessTokenMutation.getFragment('catalog').if(variables.showProcessToken), mutations.RemoveProcessTokenMutation.getFragment('processtoken').if(variables.showProcessToken), mutations.UpdateProcessTokenMutation.getFragment('processtoken').if(variables.showProcessToken), mutations.CreateProcessDefMutation.getFragment('catalog').if(variables.showProcessDef), mutations.RemoveProcessDefMutation.getFragment('catalog').if(variables.showProcessDef), mutations.UpdateProcessDefMutation.getFragment('catalog').if(variables.showProcessDef), mutations.RemoveProcessDefMutation.getFragment('processdef').if(variables.showProcessDef), mutations.UpdateProcessDefMutation.getFragment('processdef').if(variables.showProcessDef), mutations.CreateProcessMutation.getFragment('catalog').if(variables.showProcess), mutations.RemoveProcessMutation.getFragment('catalog').if(variables.showProcess), mutations.UpdateProcessMutation.getFragment('catalog').if(variables.showProcess), mutations.RemoveProcessMutation.getFragment('process').if(variables.showProcess), mutations.UpdateProcessMutation.getFragment('process').if(variables.showProcess), mutations.CreateParallelGatewayMutation.getFragment('catalog').if(variables.showParallelGateway), mutations.RemoveParallelGatewayMutation.getFragment('catalog').if(variables.showParallelGateway), mutations.UpdateParallelGatewayMutation.getFragment('catalog').if(variables.showParallelGateway), mutations.RemoveParallelGatewayMutation.getFragment('parallelgateway').if(variables.showParallelGateway), mutations.UpdateParallelGatewayMutation.getFragment('parallelgateway').if(variables.showParallelGateway), mutations.CreateNodeInstanceMutation.getFragment('catalog').if(variables.showNodeInstance), mutations.RemoveNodeInstanceMutation.getFragment('catalog').if(variables.showNodeInstance), mutations.UpdateNodeInstanceMutation.getFragment('catalog').if(variables.showNodeInstance), mutations.RemoveNodeInstanceMutation.getFragment('nodeinstance').if(variables.showNodeInstance), mutations.UpdateNodeInstanceMutation.getFragment('nodeinstance').if(variables.showNodeInstance), mutations.CreateNodeDefMutation.getFragment('catalog').if(variables.showNodeDef), mutations.RemoveNodeDefMutation.getFragment('catalog').if(variables.showNodeDef), mutations.UpdateNodeDefMutation.getFragment('catalog').if(variables.showNodeDef), mutations.RemoveNodeDefMutation.getFragment('nodedef').if(variables.showNodeDef), mutations.UpdateNodeDefMutation.getFragment('nodedef').if(variables.showNodeDef), mutations.CreateLaneMutation.getFragment('catalog').if(variables.showLane), mutations.RemoveLaneMutation.getFragment('catalog').if(variables.showLane), mutations.UpdateLaneMutation.getFragment('catalog').if(variables.showLane), mutations.RemoveLaneMutation.getFragment('lane').if(variables.showLane), mutations.UpdateLaneMutation.getFragment('lane').if(variables.showLane), mutations.CreateFlowDefMutation.getFragment('catalog').if(variables.showFlowDef), mutations.RemoveFlowDefMutation.getFragment('catalog').if(variables.showFlowDef), mutations.UpdateFlowDefMutation.getFragment('catalog').if(variables.showFlowDef), mutations.RemoveFlowDefMutation.getFragment('flowdef').if(variables.showFlowDef), mutations.UpdateFlowDefMutation.getFragment('flowdef').if(variables.showFlowDef), mutations.CreateExclusiveGatewayMutation.getFragment('catalog').if(variables.showExclusiveGateway), mutations.RemoveExclusiveGatewayMutation.getFragment('catalog').if(variables.showExclusiveGateway), mutations.UpdateExclusiveGatewayMutation.getFragment('catalog').if(variables.showExclusiveGateway), mutations.RemoveExclusiveGatewayMutation.getFragment('exclusivegateway').if(variables.showExclusiveGateway), mutations.UpdateExclusiveGatewayMutation.getFragment('exclusivegateway').if(variables.showExclusiveGateway), mutations.CreateEventMutation.getFragment('catalog').if(variables.showEvent), mutations.RemoveEventMutation.getFragment('catalog').if(variables.showEvent), mutations.UpdateEventMutation.getFragment('catalog').if(variables.showEvent), mutations.RemoveEventMutation.getFragment('event').if(variables.showEvent), mutations.UpdateEventMutation.getFragment('event').if(variables.showEvent), mutations.CreateEndEventMutation.getFragment('catalog').if(variables.showEndEvent), mutations.RemoveEndEventMutation.getFragment('catalog').if(variables.showEndEvent), mutations.UpdateEndEventMutation.getFragment('catalog').if(variables.showEndEvent), mutations.RemoveEndEventMutation.getFragment('endevent').if(variables.showEndEvent), mutations.UpdateEndEventMutation.getFragment('endevent').if(variables.showEndEvent), mutations.CreateBoundaryEventMutation.getFragment('catalog').if(variables.showBoundaryEvent), mutations.RemoveBoundaryEventMutation.getFragment('catalog').if(variables.showBoundaryEvent), mutations.UpdateBoundaryEventMutation.getFragment('catalog').if(variables.showBoundaryEvent), mutations.RemoveBoundaryEventMutation.getFragment('boundaryevent').if(variables.showBoundaryEvent), mutations.UpdateBoundaryEventMutation.getFragment('boundaryevent').if(variables.showBoundaryEvent), mutations.CreateUserMutation.getFragment('catalog').if(variables.showUser), mutations.RemoveUserMutation.getFragment('catalog').if(variables.showUser), mutations.UpdateUserMutation.getFragment('catalog').if(variables.showUser), mutations.RemoveUserMutation.getFragment('user').if(variables.showUser), mutations.UpdateUserMutation.getFragment('user').if(variables.showUser), mutations.CreateSessionStoreMutation.getFragment('catalog').if(variables.showSessionStore), mutations.RemoveSessionStoreMutation.getFragment('catalog').if(variables.showSessionStore), mutations.UpdateSessionStoreMutation.getFragment('catalog').if(variables.showSessionStore), mutations.RemoveSessionStoreMutation.getFragment('sessionstore').if(variables.showSessionStore), mutations.UpdateSessionStoreMutation.getFragment('sessionstore').if(variables.showSessionStore));
            return query;
        }
    },
    create: function create(className, catalog, row) {
        var mutation = null;
        switch (className) {
            case 'Timer':
                {

                    mutation = new mutations.CreateTimerMutation({
                        id: row.id,
                        timerType: row.timerType,
                        timerIsoString: row.timerIsoString,
                        timerRule: row.timerRule,
                        eventName: row.eventName,
                        lastElapsed: row.lastElapsed,
                        catalog: catalog
                    });
                    break;
                }
            case 'UserTask':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'SubprocessExternal':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'SubprocessInternal':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'StartEvent':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'CatchEvent':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'ThrowEvent':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'ServiceTask':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'ScriptTask':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'ProcessToken':
                {

                    mutation = new mutations.CreateProcessTokenMutation({
                        id: row.id,
                        data: row.data,
                        process: row.process,
                        catalog: catalog
                    });
                    break;
                }
            case 'ProcessDef':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'Process':
                {

                    mutation = new mutations.CreateProcessMutation({
                        id: row.id,
                        name: row.name,
                        key: row.key,
                        status: row.status,
                        processDef: row.processDef,
                        isSubProcess: row.isSubProcess,
                        callerId: row.callerId,
                        catalog: catalog
                    });
                    break;
                }
            case 'ParallelGateway':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'NodeInstance':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'NodeDef':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'Lane':
                {

                    mutation = new mutations.CreateLaneMutation({
                        id: row.id,
                        name: row.name,
                        key: row.key,
                        extensions: row.extensions,
                        processDef: row.processDef,
                        counter: row.counter,
                        nodeDefCollection: row.nodeDefCollection,
                        catalog: catalog
                    });
                    break;
                }
            case 'FlowDef':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'ExclusiveGateway':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'Event':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'EndEvent':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'BoundaryEvent':
                {

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
                        catalog: catalog
                    });
                    break;
                }
            case 'User':
                {

                    mutation = new mutations.CreateUserMutation({
                        id: row.id,
                        name: row.name,
                        password: row.password,
                        roles: row.roles,
                        catalog: catalog
                    });
                    break;
                }
            case 'SessionStore':
                {

                    mutation = new mutations.CreateSessionStoreMutation({
                        id: row.id,
                        identityId: row.identityId,
                        systemUserId: row.systemUserId,
                        data: row.data,
                        roles: row.roles,
                        catalog: catalog
                    });
                    break;
                }
            default:
                {
                    mutation = null;
                }
        }
        if (mutation) {
            _reactRelay2.default.Store.commitUpdate(mutation);
        }
    },
    update: function update(className, catalog, row, cellName, cellValue) {
        var entity = {
            id: row.id
        };

        var updatedEntity = row;
        delete updatedEntity.id;

        var mutation = null;
        switch (className) {
            case 'Timer':
                {

                    mutation = new mutations.UpdateTimerMutation({
                        catalog: catalog,
                        timer: entity,
                        updatedTimer: updatedEntity
                    });
                    break;
                }
            case 'UserTask':
                {

                    mutation = new mutations.UpdateUserTaskMutation({
                        catalog: catalog,
                        usertask: entity,
                        updatedUserTask: updatedEntity
                    });
                    break;
                }
            case 'SubprocessExternal':
                {

                    mutation = new mutations.UpdateSubprocessExternalMutation({
                        catalog: catalog,
                        subprocessexternal: entity,
                        updatedSubprocessExternal: updatedEntity
                    });
                    break;
                }
            case 'SubprocessInternal':
                {

                    mutation = new mutations.UpdateSubprocessInternalMutation({
                        catalog: catalog,
                        subprocessinternal: entity,
                        updatedSubprocessInternal: updatedEntity
                    });
                    break;
                }
            case 'StartEvent':
                {

                    mutation = new mutations.UpdateStartEventMutation({
                        catalog: catalog,
                        startevent: entity,
                        updatedStartEvent: updatedEntity
                    });
                    break;
                }
            case 'CatchEvent':
                {

                    mutation = new mutations.UpdateCatchEventMutation({
                        catalog: catalog,
                        catchevent: entity,
                        updatedCatchEvent: updatedEntity
                    });
                    break;
                }
            case 'ThrowEvent':
                {

                    mutation = new mutations.UpdateThrowEventMutation({
                        catalog: catalog,
                        throwevent: entity,
                        updatedThrowEvent: updatedEntity
                    });
                    break;
                }
            case 'ServiceTask':
                {

                    mutation = new mutations.UpdateServiceTaskMutation({
                        catalog: catalog,
                        servicetask: entity,
                        updatedServiceTask: updatedEntity
                    });
                    break;
                }
            case 'ScriptTask':
                {

                    mutation = new mutations.UpdateScriptTaskMutation({
                        catalog: catalog,
                        scripttask: entity,
                        updatedScriptTask: updatedEntity
                    });
                    break;
                }
            case 'ProcessToken':
                {

                    mutation = new mutations.UpdateProcessTokenMutation({
                        catalog: catalog,
                        processtoken: entity,
                        updatedProcessToken: updatedEntity
                    });
                    break;
                }
            case 'ProcessDef':
                {

                    mutation = new mutations.UpdateProcessDefMutation({
                        catalog: catalog,
                        processdef: entity,
                        updatedProcessDef: updatedEntity
                    });
                    break;
                }
            case 'Process':
                {

                    mutation = new mutations.UpdateProcessMutation({
                        catalog: catalog,
                        process: entity,
                        updatedProcess: updatedEntity
                    });
                    break;
                }
            case 'ParallelGateway':
                {

                    mutation = new mutations.UpdateParallelGatewayMutation({
                        catalog: catalog,
                        parallelgateway: entity,
                        updatedParallelGateway: updatedEntity
                    });
                    break;
                }
            case 'NodeInstance':
                {

                    mutation = new mutations.UpdateNodeInstanceMutation({
                        catalog: catalog,
                        nodeinstance: entity,
                        updatedNodeInstance: updatedEntity
                    });
                    break;
                }
            case 'NodeDef':
                {

                    mutation = new mutations.UpdateNodeDefMutation({
                        catalog: catalog,
                        nodedef: entity,
                        updatedNodeDef: updatedEntity
                    });
                    break;
                }
            case 'Lane':
                {

                    mutation = new mutations.UpdateLaneMutation({
                        catalog: catalog,
                        lane: entity,
                        updatedLane: updatedEntity
                    });
                    break;
                }
            case 'FlowDef':
                {

                    mutation = new mutations.UpdateFlowDefMutation({
                        catalog: catalog,
                        flowdef: entity,
                        updatedFlowDef: updatedEntity
                    });
                    break;
                }
            case 'ExclusiveGateway':
                {

                    mutation = new mutations.UpdateExclusiveGatewayMutation({
                        catalog: catalog,
                        exclusivegateway: entity,
                        updatedExclusiveGateway: updatedEntity
                    });
                    break;
                }
            case 'Event':
                {

                    mutation = new mutations.UpdateEventMutation({
                        catalog: catalog,
                        event: entity,
                        updatedEvent: updatedEntity
                    });
                    break;
                }
            case 'EndEvent':
                {

                    mutation = new mutations.UpdateEndEventMutation({
                        catalog: catalog,
                        endevent: entity,
                        updatedEndEvent: updatedEntity
                    });
                    break;
                }
            case 'BoundaryEvent':
                {

                    mutation = new mutations.UpdateBoundaryEventMutation({
                        catalog: catalog,
                        boundaryevent: entity,
                        updatedBoundaryEvent: updatedEntity
                    });
                    break;
                }
            case 'User':
                {

                    mutation = new mutations.UpdateUserMutation({
                        catalog: catalog,
                        user: entity,
                        updatedUser: updatedEntity
                    });
                    break;
                }
            case 'SessionStore':
                {

                    mutation = new mutations.UpdateSessionStoreMutation({
                        catalog: catalog,
                        sessionstore: entity,
                        updatedSessionStore: updatedEntity
                    });
                    break;
                }
            default:
                {
                    mutation = null;
                }
        }

        if (mutation) {
            _reactRelay2.default.Store.commitUpdate(mutation);
        }
    },
    remove: function remove(className, catalog, row, entity) {
        var mutation = null;
        switch (className) {
            case 'Timer':
                {
                    mutation = new mutations.RemoveTimerMutation({ catalog: catalog, timer: entity });
                    break;
                }
            case 'UserTask':
                {
                    mutation = new mutations.RemoveUserTaskMutation({ catalog: catalog, usertask: entity });
                    break;
                }
            case 'SubprocessExternal':
                {
                    mutation = new mutations.RemoveSubprocessExternalMutation({ catalog: catalog, subprocessexternal: entity });
                    break;
                }
            case 'SubprocessInternal':
                {
                    mutation = new mutations.RemoveSubprocessInternalMutation({ catalog: catalog, subprocessinternal: entity });
                    break;
                }
            case 'StartEvent':
                {
                    mutation = new mutations.RemoveStartEventMutation({ catalog: catalog, startevent: entity });
                    break;
                }
            case 'CatchEvent':
                {
                    mutation = new mutations.RemoveCatchEventMutation({ catalog: catalog, catchevent: entity });
                    break;
                }
            case 'ThrowEvent':
                {
                    mutation = new mutations.RemoveThrowEventMutation({ catalog: catalog, throwevent: entity });
                    break;
                }
            case 'ServiceTask':
                {
                    mutation = new mutations.RemoveServiceTaskMutation({ catalog: catalog, servicetask: entity });
                    break;
                }
            case 'ScriptTask':
                {
                    mutation = new mutations.RemoveScriptTaskMutation({ catalog: catalog, scripttask: entity });
                    break;
                }
            case 'ProcessToken':
                {
                    mutation = new mutations.RemoveProcessTokenMutation({ catalog: catalog, processtoken: entity });
                    break;
                }
            case 'ProcessDef':
                {
                    mutation = new mutations.RemoveProcessDefMutation({ catalog: catalog, processdef: entity });
                    break;
                }
            case 'Process':
                {
                    mutation = new mutations.RemoveProcessMutation({ catalog: catalog, process: entity });
                    break;
                }
            case 'ParallelGateway':
                {
                    mutation = new mutations.RemoveParallelGatewayMutation({ catalog: catalog, parallelgateway: entity });
                    break;
                }
            case 'NodeInstance':
                {
                    mutation = new mutations.RemoveNodeInstanceMutation({ catalog: catalog, nodeinstance: entity });
                    break;
                }
            case 'NodeDef':
                {
                    mutation = new mutations.RemoveNodeDefMutation({ catalog: catalog, nodedef: entity });
                    break;
                }
            case 'Lane':
                {
                    mutation = new mutations.RemoveLaneMutation({ catalog: catalog, lane: entity });
                    break;
                }
            case 'FlowDef':
                {
                    mutation = new mutations.RemoveFlowDefMutation({ catalog: catalog, flowdef: entity });
                    break;
                }
            case 'ExclusiveGateway':
                {
                    mutation = new mutations.RemoveExclusiveGatewayMutation({ catalog: catalog, exclusivegateway: entity });
                    break;
                }
            case 'Event':
                {
                    mutation = new mutations.RemoveEventMutation({ catalog: catalog, event: entity });
                    break;
                }
            case 'EndEvent':
                {
                    mutation = new mutations.RemoveEndEventMutation({ catalog: catalog, endevent: entity });
                    break;
                }
            case 'BoundaryEvent':
                {
                    mutation = new mutations.RemoveBoundaryEventMutation({ catalog: catalog, boundaryevent: entity });
                    break;
                }
            case 'User':
                {
                    mutation = new mutations.RemoveUserMutation({ catalog: catalog, user: entity });
                    break;
                }
            case 'SessionStore':
                {
                    mutation = new mutations.RemoveSessionStoreMutation({ catalog: catalog, sessionstore: entity });
                    break;
                }
            default:
                {
                    mutation = null;
                }
        }

        if (mutation) {
            _reactRelay2.default.Store.commitUpdate(mutation);
        }
    }
};

exports.default = CrudTableHelper;
module.exports = exports['default'];
