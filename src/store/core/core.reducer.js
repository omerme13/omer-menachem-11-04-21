import { CoreActionTypes } from "./core.actionTypes";
import { coreInitialState } from "./core.initState";

export const coreReducerKey = 'core';

export function CoreReducer(state = coreInitialState, action) {
    switch (action.type) {
        case CoreActionTypes.GET_CORE_RES:
            return {
                ...state,
                data: action.payload
            }

        default: return state;
    }
}