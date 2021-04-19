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
        
        case CoreActionTypes.TOGGLE_TOAST: {
            const {msg, isOpen, type} = action.payload;
            
            return {
                ...state,
                toast: {
                    msg,
                    isOpen,
                    type
                }
            }
        }

        case CoreActionTypes.SWITCH_THEME: {
            
            return {
                ...state,
                preference: {
                    ...state.preference,
                    theme: state.preference.theme === 'light' ? 'dark' : 'light'
                }
            }
        }

        case CoreActionTypes.CHANGE_TEMP_UNIT: {
            
            return {
                ...state,
                preference: {
                    ...state.preference,
                    tempUnit: state.preference.tempUnit === 'c' ? 'f' : 'c'
                }
            }
        }

        default: return state;
    }
}