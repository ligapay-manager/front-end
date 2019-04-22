import { SET_CREDENTIALS, CLEAR_CREDENTIALS } from './actions';


const initialState = {
  token: '',
  refreshToken: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDENTIALS: {
      const { token, refreshToken } = action.payload;

      return { ...state, token, refreshToken };
    }

    case CLEAR_CREDENTIALS:
      return { ...initialState };

    default:
      return state;
  }
};

export default userReducer;
