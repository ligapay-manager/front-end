export const Types = {
  SET: 'user/SET',
  CLEAR: 'user/CLEAR',
};

const INITIAL_STATE = {
  token: '',
};

export default userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET: {
      const { token, wallet, team, id } = action.payload;

      return { ...state, token, wallet, team, id };
    }

    case Types.CLEAR:
      return { ...initialState };

    default:
      return state;
  }
};

export default Creators = {
  setCredentials = ({ token, wallet, team, id }) => ({
    type: Types.SET,
    payload: {
      token,
      wallet: { id: wallet.id },
      team: { id: team.id, cartolaName: team.cartolaName, name: team.name, avatar: team.avatar },
      id
    }
  }),
  
  clearCredentials = () => ({
    type: Types.CLEAR
  }),
}
