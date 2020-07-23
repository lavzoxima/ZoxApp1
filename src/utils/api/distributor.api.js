import axios from 'axios';
import {Config} from '../../../config';
import {in200s} from './common';









function getAllDistributors(params) {
	let url = Config.GET_DISTRIBUTOR_ALL ;


    return axios.get(url,  {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + params.access_token,
        }

    }).then((response) => {
        if (in200s(response.status)) {
            return response['data']['records']
        }
        return null
    }).catch(error => {
    	bugsnag.notify(new Error('getAllDistricts: ' + JSON.stringify(error.response.data[0])));
        return null
    });
}
export const DistributorService = {
  getAllDistributors
};
