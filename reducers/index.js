import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import dashboard from './dashboardReducer';
import help from './helpReducer';
import helps from './helpsReducer';
import user from './userReducer';


const rootReducer = combineReducers({
  dashboard,
  help,
  helps,
  user,
  form: formReducer,
});

export default rootReducer;
