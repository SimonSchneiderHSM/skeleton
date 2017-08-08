/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class RemoveTimerMutation extends Relay.Mutation {
    static fragments = {
        catalog: () => Relay.QL`
            fragment on Catalog {
                id,
                TimerConnection {
                    totalCount
                }
            }
        `,

        timer: () => Relay.QL`
            fragment on Timer {
                id
            }
        `
    };

    getMutation() {
        return Relay.QL`
            mutation {
                removeTimer
            }
        `;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on RemoveTimerPayload {
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
                deletedId
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'NODE_DELETE',
            parentName: 'catalog',
            parentID: this.props.catalog.id,
            connectionName: 'TimerConnection',
            deletedIDFieldName: 'deletedId'
        }];
    }

    getVariables() {
        return {
            id: this.props.timer.id
        };
    }

    getOptimisticResponse() {
        const { catalog, timer } = this.props;
        let { totalCount } = catalog.TimerConnection;

        return {
            catalog: {
                TimerConnection: {
                    totalCount: --totalCount
                },
                id: catalog.id
            },
            deletedId: timer.id
        };
    }
}
