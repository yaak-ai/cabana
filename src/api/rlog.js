import { request as Request } from '../services/yaak-api';
import CommaAuth from '../services/yaak-auth';
import request from 'simple-get';

const urlStore = {};

let initPromise;
function ensureInit() {
  if (!initPromise) {
    initPromise = CommaAuth.init().then((token) => {
      Request.configure(token);
      return Promise.resolve();
    });
  }
  return initPromise;
}

export async function getLogPart(logUrl) {
  return new Promise(async (resolve, reject) => {
    request(logUrl, (err, res) => {
      if (err) {
        return reject(err);
      }
      resolve(res);
    });
  });
}
