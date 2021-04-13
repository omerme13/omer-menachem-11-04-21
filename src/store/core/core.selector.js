
export class CoreSelector {
    getAppPage = state => state.core.page; 
}


export const coreSelector = new CoreSelector();