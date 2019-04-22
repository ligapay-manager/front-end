export const SET_CREDENTIALS = 'SET_CREDENTIALS';

export const setCredentials = (token, refreshToken) => ({
  type: SET_CREDENTIALS,
  payload: { token, refreshToken }
});
