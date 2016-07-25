import * as types from './actionTypes';

export function pageSwitcher(page = '') {
  let payload = {};
  switch (page) {
    case 'feeds':
      payload = {
        type: types.SHOW_HELPS_FEED,
        page,
      };
      break;
    case 'messages':
      payload = {
        type: types.SHOW_INBOX,
        page,
      };
      break;
    case 'projects':
      payload = {
        type: types.SHOW_PROJECTS,
        page,
      };
      break;
    case 'support':
      payload = {
        type: types.SHOW_SUPPORT,
        page,
      };
      break;
    case 'about':
      payload = {
        type: types.SHOW_ABOUT,
        page,
      };
      break;
    default:
      payload = {
        type: '',
        page,
      };
  }
  
  return payload;
}
