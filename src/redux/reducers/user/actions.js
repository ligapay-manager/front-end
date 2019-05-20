export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';

export const setCredentials = (token, userId, teamId, walletId) => ({
  type: SET_CREDENTIALS,
  payload: { token, userId, teamId, walletId }
});

export const clearCredentials = () => ({
  type: CLEAR_CREDENTIALS
});
