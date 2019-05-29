export const Types = {
  SET_CREDENTIALS: 'user/SET_CREDENTIALS',
  CLEAR_CREDENTIALS: 'user/CLEAR_CREDENTIALS'
};

const initialState = {
  token: ''
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case Types.SET_CREDENTIALS: {
      const { token, wallet, team, id } = action.payload;

      return { ...state, token, wallet, team, id };
    }

    case Types.CLEAR_CREDENTIALS:
      return { ...initialState };

    default:
      return state;
  }
}

export const Creators = {
  setCredentials: ({ token, wallet, team, id }) => ({
    type: Types.SET_CREDENTIALS,
    payload: {
      token,
      wallet: { id: wallet.id },
      team: { id: team.id, cartolaName: team.cartolaName, name: team.name, avatar: team.avatar },
      id
    }
  }),

  clearCredentials: () => ({
    type: Types.CLEAR_CREDENTIALS
  })
};
