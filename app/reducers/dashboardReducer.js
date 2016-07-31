import * as types from '../actions/actionTypes';

export default function dashboardReducer(state = {
  page: '' }, action) {
  switch (action.type) {
    case types.SHOW_HELPS_FEED:
      return Object.assign({}, state, { page: 'feeds' });
    case types.SHOW_INBOX:
      return Object.assign({}, state, { page: 'messages' });
    case types.SHOW_PROJECTS:
      return Object.assign({}, state, { page: 'projects' });
    case types.SHOW_SUPPORT:
      return Object.assign({}, state, { page: 'support' });
    case types.SHOW_ABOUT:
      return Object.assign({}, state, { page: 'about' });
    default:
      return state;
  }
}
