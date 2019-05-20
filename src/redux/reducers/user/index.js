import { SET_CREDENTIALS, CLEAR_CREDENTIALS } from './actions';


const initialState = {
  token: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS: {
      const { token, userId, teamId, walletId } = action.payload;

      return { ...state, token, userId, teamId, walletId };
    }

    case CLEAR_CREDENTIALS:
      return { ...initialState };

    default:
      return state;
  }
};

export default userReducer;
