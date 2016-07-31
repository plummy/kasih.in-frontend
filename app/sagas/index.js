import { take, put, call, fork, select } from 'redux-saga/effects';
import loginFlow from './userSaga.js';
import {
  helpFeedsFlow,
  helpSubmitFlow,
  descriptionFieldFlow,
  saveLocationFieldFlow,
  discardLocationFieldFlow } from './helpSaga.js';

export default function* root() {
  yield [
    fork(helpFeedsFlow),
    fork(helpSubmitFlow),
    fork(loginFlow),
    fork(descriptionFieldFlow),
    fork(saveLocationFieldFlow),
    fork(discardLocationFieldFlow),
  ];
}
