import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware, { END } from 'redux-saga';
import sagas from '../sagas';

export default function configureStore(initialState) {
  const rootSagas = [
    sagas,
  ];
  const sagaMiddleWare = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleWare),
      window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  store.runSaga = sagaMiddleWare.run(...rootSagas);
  store.close = () => store.dispatch(END);
  return store;
}
