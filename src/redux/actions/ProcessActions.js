import * as type from '../types';

/**
 * makes the loading screen open.
 */
export const showLoadingScreen = () => ({
    type: type.APP_SHOW_LOADING_SCREEN,
});

/**
 * makes the loading screen close.
 */
export const hideLoadingScreen = () => ({
    type: type.APP_HIDE_LOADING_SCREEN,
});

/**
 * makes a call to saga for try to get the specific process.
 * @param {String} id - cnj number
 */
export const appGetProcess = (id, func) => ({
    type: type.APP_GET_PROCESS,
    payload: {
        id,
        func,
    }
});

/**
 * If the api return some data, capture it and save in reducer.
 * @param {Object} data - All information about the process
 */
export const appGetProcessDidSuccess = (data) => ({
    type: type.APP_GET_PROCESS_DID_SUCCESS,
    payload: {
        data,
    }
});

/**
 * Returns to reducer a error message about the attempt of search process.
 * @param {String} error - message of error.
 * @returns 
 */
export const appGetProcessDidFailure = (error) => ({
    type: type.APP_GET_PROCESS_DID_FAILURE,
    payload: {
        error,
    }
});

/**
 * Just clean the state of the reducer.
 */
export const appCleanState = () => ({
    type: type.APP_CLEAN_STATE,
});