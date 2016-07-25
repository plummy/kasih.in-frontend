import * as types from '../actions/actionTypes';

export default function helpReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_HELP:
      return [...state,
        Object.assign({}, action.help),
      ];
    default:
      return state;
  }
}
