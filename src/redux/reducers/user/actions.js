export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';

export const setCredentials = ({ token, wallet, team, id }) => ({
  type: SET_CREDENTIALS,
  payload: {
    token,
    wallet: { id: wallet.id },
    team: { id: team.id, cartolaName: team.cartolaName, name: team.name, avatar: team.avatar },
    id
  }
});

export const clearCredentials = () => ({
  type: CLEAR_CREDENTIALS
});
