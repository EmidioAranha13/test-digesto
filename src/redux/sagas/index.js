import {all} from 'redux-saga/effects';

import ProcessSaga from './ProcessSaga';

/**
 * Reunite all the sagas in one place.
 */
export default function* rootSaga(){
    yield all([
        ...ProcessSaga,
    ]);
}