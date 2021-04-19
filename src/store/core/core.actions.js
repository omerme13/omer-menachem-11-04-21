import {CoreActionTypes} from "./core.actionTypes";

export class CoreActions {
    initApp() {
        return ({type: CoreActionTypes.INIT_APP});
    }

    goToPage(payload) {
        return ({type: CoreActionTypes.GO_TO_PAGE, payload});
    }

    toggleToast(payload) {
        return ({type: CoreActionTypes.TOGGLE_TOAST, payload});
    }

    switchTheme() {
        return ({type: CoreActionTypes.SWITCH_THEME});
    }

    changeTempUnit() {
        return ({type: CoreActionTypes.CHANGE_TEMP_UNIT});
    }

}

export const coreActions = new CoreActions();