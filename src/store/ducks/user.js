import { createActions, createReducer } from 'reduxsauce';


export const { Types, Creators } = createActions({
  setCredentials: ['token', 'wallet', 'team', 'id', 'cards'],
  clearCredentials: null
});

const initialState = {
  token: ''
};

const set = (state = initialState, action) => {
  const { token, wallet, team, id, cards } = action;
  return { ...state, token, wallet, team, id, cards };
};

const clear = () => ({ ...initialState });

export default createReducer(initialState, {
  [Types.SET_CREDENTIALS]: set,
  [Types.CLEAR_CREDENTIALS]: clear
});
