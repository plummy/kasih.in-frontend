import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import help from './helpReducer';
import helps from './helpsReducer';


const rootReducer = combineReducers({
  help,
  helps,
  form: formReducer,
});

export default rootReducer;
