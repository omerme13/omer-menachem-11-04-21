import {CoreActionTypes} from "./core.actionTypes";

export class CoreActions {
    initApp() {
        return ({type: CoreActionTypes.INIT_APP});
    }
}

export const coreActions = new CoreActions();