export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';

export const setCredentials = (token, refreshToken) => ({
  type: SET_CREDENTIALS,
  payload: { token, refreshToken }
});

export const clearCredentials = () => ({
  type: CLEAR_CREDENTIALS
});
