import * as types from '../actions/actionTypes';
import * as helpActions from '../actions/helpActions';
import { api } from '../api/helpApi';
import { takeEvery, takeLatest } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';

function* getHelps() {
  try {
    const helps = yield call(api.getHelps);
    yield put(helpActions.getHelpsFeedSuccess(helps));
  } catch (e) {
    yield put({ type: types.HELPS_FEED_FAILURE, message: e.message });
  }
}

function* helpFeedsFlow() {
  yield* takeLatest("HELPS_FEED_REQUEST", getHelps);
}

export default helpFeedsFlow;

