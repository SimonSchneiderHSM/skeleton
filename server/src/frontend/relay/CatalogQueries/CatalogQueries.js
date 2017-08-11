import Relay from 'react-relay';

export default {
    catalog: () => Relay.QL`query { catalog }`
};
