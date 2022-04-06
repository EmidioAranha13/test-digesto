import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from './reducers/index.js';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import { devToolsEnhancer } from "redux-devtools-extension";



const sagaMiddleware = createSagaMiddleware();
const store = compose(
    applyMiddleware(sagaMiddleware),
    devToolsEnhancer(),
)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default store;
