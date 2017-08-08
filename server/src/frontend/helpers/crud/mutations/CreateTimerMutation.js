/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class CreateTimerMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                TimerConnection {
                    totalCount
                }
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                createTimer
            }
        `;
    }

    getVariables() {
        return {
            id: this.props.id,
            timerType: this.props.timerType,
            timerIsoString: this.props.timerIsoString,
            timerRule: this.props.timerRule,
            eventName: this.props.eventName,
            lastElapsed: this.props.lastElapsed,
        };
    }

    getFatQuery() {
        return Relay.QL`
            fragment on CreateTimerPayload {
                catalog {
                    id,
                    TimerConnection(first: 0) {
                        edges {
                            node {
                                id,
                                timerType,
                                timerIsoString,
                                timerRule,
                                eventName,
                                lastElapsed,
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
                connectionName: 'TimerConnection',
                edgeName: 'entityEdge',
                rangeBehaviors: (connectionArgs) => 'refetch'
            }
        ];
    }

    getOptimisticResponse() {
        const {
            id,
            timerType,
            timerIsoString,
            timerRule,
            eventName,
            lastElapsed,
            catalog } = this.props;
        let { totalCount } = catalog.TimerConnection;

        return {
            catalog: {
                TimerConnection: {
                    totalCount: ++totalCount
                },
                id: catalog.id
            },
            entityEdge: {
                node: {
                    id,
                    timerType,
                    timerIsoString,
                    timerRule,
                    eventName,
                    lastElapsed,
                }
            }
        };
    }
}
