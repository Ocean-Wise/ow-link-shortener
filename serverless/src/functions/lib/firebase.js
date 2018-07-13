import admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import credentials from '../credentials/server';

export { functions };
export const firebase = admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: 'https://ocean-wise-186900.firebaseio.com',
}, 'server');
