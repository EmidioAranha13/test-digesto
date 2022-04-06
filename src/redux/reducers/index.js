import { combineReducers } from "redux";
import ProcessReducer from "./ProcessReducer";
import {connectRouter} from 'connected-react-router';

const rootReducer = combineReducers({
    ProcessReducer,
});

export default rootReducer;