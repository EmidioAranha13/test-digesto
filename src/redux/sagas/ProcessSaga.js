import {call, put, takeLatest, fork} from 'redux-saga/effects';
import { push } from "connected-react-router";
import {
    APP_GET_PROCESS,
} from '../types';

import { 
    showLoadingScreen, 
    hideLoadingScreen, 
    appGetProcessDidSuccess, 
    appGetProcessDidFailure,
} from '../actions';

import {apiGetProcess} from '../apis/index';

/**
 * Try to contact the api to search for a process. If found, returns process data, 
 * otherwise returns a error message about the attempt.
 * @param {Object} param0 - the cnj.
 */
function* sagaGetProcess({ payload }) {
    const {id, func} = payload;
    let page = "/";
    try {
        yield put(showLoadingScreen());
        let data = yield call(apiGetProcess, id);
        if(data){
            if(data.status_op){
                yield put(appGetProcessDidFailure(data.status_op));
            }else{
                yield put(appGetProcessDidSuccess(data));
                page = "/Processo";
            }
        }
    } catch (error) {
        console.log(error);
        yield put(appGetProcessDidFailure("Algo deu errado. Tente novamente."));
    }finally{
        yield put(hideLoadingScreen());
        yield func(page);
    }
}

export function* watchGetProcess() {
    yield takeLatest(APP_GET_PROCESS,sagaGetProcess);
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default [
    fork(watchGetProcess),
];
  