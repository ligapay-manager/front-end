export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';

export const setCredentials = token => ({
  type: SET_CREDENTIALS,
  payload: { token }
});

export const clearCredentials = () => ({
  type: CLEAR_CREDENTIALS
});
