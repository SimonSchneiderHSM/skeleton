/* eslint padded-blocks:0 */
/* eslint no-multiple-empty-lines:0 */

import Relay from 'react-relay';

export default class UdpateTimerMutation extends Relay.Mutation {
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
                id,
                timerType,
                timerIsoString,
                timerRule,
                eventName,
                lastElapsed,
            }
        `
    };

    getMutation() {
        return Relay.QL`mutation{
            updateTimer
        }`;
    }

    getFatQuery() {
        return Relay.QL`
            fragment on UpdateTimerPayload {
                entity {
                    id,
                    timerType,
                    timerIsoString,
                    timerRule,
                    eventName,
                    lastElapsed,
                },
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
                }
            }
        `;
    }

    getConfigs() {
        return [{
            type: 'FIELDS_CHANGE',
            fieldIDs: {
                catalog: this.props.catalog.id,
                entity: this.props.timer.id
            }
        }];
    }

    getVariables() {
        return {
            
            id: this.props.updatedTimer.id,
            
            timerType: this.props.updatedTimer.timerType,
            
            timerIsoString: this.props.updatedTimer.timerIsoString,
            
            timerRule: this.props.updatedTimer.timerRule,
            
            eventName: this.props.updatedTimer.eventName,
            
            lastElapsed: this.props.updatedTimer.lastElapsed,
        };
    }

    getOptimisticResponse() {
        return {
            entity: {
                
                id: this.props.updatedTimer.id,
                
                timerType: this.props.updatedTimer.timerType,
                
                timerIsoString: this.props.updatedTimer.timerIsoString,
                
                timerRule: this.props.updatedTimer.timerRule,
                
                eventName: this.props.updatedTimer.eventName,
                
                lastElapsed: this.props.updatedTimer.lastElapsed,
            }
        };
    }
}
