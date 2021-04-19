
export class CoreSelector {
    getAppPage = state => state.core.page;
    getToastData = state => state.core.toast;
    getUserPreference = state => state.core.preference;
}


export const coreSelector = new CoreSelector();