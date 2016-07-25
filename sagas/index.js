import { take, put, call, fork, select } from 'redux-saga/effects';
import loginFlow from './userSaga.js';
import helpsFlow from './helpSaga.js';

export default function* root() {
  yield [
    fork(helpsFlow),
    fork(loginFlow),
  ];
}
