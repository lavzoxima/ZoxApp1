import axios from 'axios';
import {Config} from '../../../config';
import {in200s} from './common';

export const createOrderDetails = (orderData, token) => {
  return axios
    .post(Config.CREATE_ORDER_DETAILS_URL, orderData, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (in200s(response.status)) {
        if (response.data.hasErrors) {
          throw new Error(
            `Unable to create order. Response: ${JSON.stringify(
              response.data,
            )}`,
          );
        }
        return response.data;
      }
    })
    .catch(error => {
      throw error;
    });
};
