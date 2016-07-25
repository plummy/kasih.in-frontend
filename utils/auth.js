import { browserHistory } from 'react-router';

export function checkAuth(nextState, replace, loggedIn) {
  if (!loggedIn) {
    replace({ pathname: '/login' });
  } 
}

export function forwardTo(location) {
  browserHistory.push(location);
}
