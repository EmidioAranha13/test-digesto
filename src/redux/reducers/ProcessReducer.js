import * as type from '../types';

/** 
 *Initial state of each process.
 */

const initialState = {
    isLoading: false,
    data: null,
    error: null,
    alert: false,
}

/**
 * Controls the status of all process inside the application.
 */
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case type.APP_SHOW_LOADING_SCREEN: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case type.APP_HIDE_LOADING_SCREEN: {
            return {
                ...state,
                isLoading: false,
            };
        }
        case type.APP_GET_PROCESS_DID_SUCCESS: {
            const {data} = action.payload;
            return {
                ...state,
                data,
            };
        }
        case type.APP_GET_PROCESS_DID_FAILURE: {
            const {error} = action.payload;
            return {
                ...state,
                error,
                alert: true,
            };
        }

        case type.APP_CLEAN_STATE: {
            return {
                ...state,
                error: null,
                alert: false,
            }
        }
        default: 
            return { ...state };
    }
}