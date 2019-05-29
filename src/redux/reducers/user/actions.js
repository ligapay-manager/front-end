export const SET_CREDENTIALS = 'SET_CREDENTIALS';
export const CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS';

export function setCredentials({ token, wallet, team, id }) {
  return {
    type: SET_CREDENTIALS,
    payload: {
      token,
      wallet: { id: wallet.id },
      team: { id: team.id, cartolaName: team.cartolaName, name: team.name, avatar: team.avatar },
      id
    }
  };
}

export function clearCredentials() {
  return {
    type: CLEAR_CREDENTIALS
  };
}
