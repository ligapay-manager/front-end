import * as actions from './actions';


const initialState = {
  token: '',
  refreshToken: ''
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_CREDENTIALS: {
      const { token, refreshToken } = action.payload;

      return { ...state, token, refreshToken };
    }

    default:
      return state;
  }
};

export default userReducer;
