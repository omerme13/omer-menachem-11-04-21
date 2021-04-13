import {CoreActionTypes} from "./core.actionTypes";

export class CoreActions {
    initApp() {
        return ({type: CoreActionTypes.INIT_APP});
    }

    goToPage(payload) {
        return ({type: CoreActionTypes.GO_TO_PAGE, payload});
    }

    selectedFavorite(payload) {
        return ({type: CoreActionTypes.ON_SELECTED_FAVORITE, payload});
    }
}

export const coreActions = new CoreActions();