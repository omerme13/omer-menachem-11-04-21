import {createSelector} from 'reselect';

export class CoreSelector {
    getTempSelector = (state) => state.core.temp; 
    getUsersSelector = (state) => state.core.users; 
    // getTempSelector = createSelector(

    // )

}


export const coreSelector = new CoreSelector();