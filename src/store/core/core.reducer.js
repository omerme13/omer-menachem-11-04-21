import { CoreActionTypes } from "./core.actionTypes";
import { coreInitialState } from "./core.initState";

export const coreReducerKey = 'core';

export function CoreReducer(state = coreInitialState, action) {
    switch (action.type) {
        case CoreActionTypes.GO_TO_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }

        default: return state;
    }
}