import axios from 'axios';
import {Config} from '../../../config';
import {in200s} from './common';

export const getAttachmentIdFromEntityId = (entityId, token) => {
  let attachmentIdRequestUrl = Config.ATTACHMENT_ID_URL.replace(
    '__entityId__',
    entityId,
  );
  return axios
    .get(attachmentIdRequestUrl, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      if (in200s(response.status)) {
        let [attachmentInfo = {}] = response['data']['records'] || [];
        return attachmentInfo.ContentDocumentId || null;
      }
      return null;
    })
    .catch(error => {
      console.log(error);
      return null;
    });
};
