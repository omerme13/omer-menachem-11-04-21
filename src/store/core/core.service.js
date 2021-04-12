import Axios from 'axios';

export class CoreService {
    constructor() {
    }



        getCore = (locationKey) => Axios.get(`http://dataservice.accucore.com/currentconditions/v1/${locationKey}`,
        {
            params: {
                // apikey: "4kfYq2zbJgLGJ9vyYa3FfuFLU7RdXL0b"
            }
        }
    )
}

export const coreService = new CoreService();