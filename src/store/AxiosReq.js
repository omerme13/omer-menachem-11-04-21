import Axios from 'axios';

export class AxiosReq {
    get = (url, params) => (
        Axios.get(url, { params }).catch(err => err)
    )
}

export const axiosReq = new AxiosReq();
