import { createActions, createReducer } from 'reduxsauce';


export const { Types, Creators } = createActions({
  setCredentials: ['token', 'tokenGlobo', 'wallet', 'team', 'id', 'cards'],
  clearCredentials: null,
  setLeagues: ['leagues']
});

const initialState = {
  token: ''
};

const set = (state = initialState, action) => {
  const { token, tokenGlobo, wallet, team, id, cards } = action;
  return { ...state, token, tokenGlobo, wallet, team, id, cards };
};

const clear = () => ({ ...initialState });

const setLeagues = (state = initialState, action) => {
  const { leagues } = action;
  return { ...state, leagues };
};

export default createReducer(initialState, {
  [Types.SET_CREDENTIALS]: set,
  [Types.CLEAR_CREDENTIALS]: clear,
  [Types.SET_LEAGUES]: setLeagues
});
