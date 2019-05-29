import { SET_CREDENTIALS, CLEAR_CREDENTIALS } from './actions';


const initialState = {
  token: ''
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CREDENTIALS: {
      const { token, wallet, team, id } = action.payload;

      return { ...state, token, wallet, team, id };
    }

    case CLEAR_CREDENTIALS:
      return { ...initialState };

    default:
      return state;
  }
}
