import api from "../../services/accounts";

const DEFAULT_STATE = {
  account: null,
  accessToken: null,
};

const SIGN_IN_START = "account/SIGN_IN/start";
const SIGN_IN_SUCCESS = "account/SIGN_IN/sucess";
const SIGN_IN_ERROR = "account/SIGN_IN/error";
const SIGN_OUT = "account/SIGN_OUT";
const SIGN_UP_START = "account/SIGN_UP/start";
const SIGN_UP_SUCCESS = "account/SIGN_UP/success";
const SIGN_UP_ERROR = "account/SIGN_UP/error";

const actions = {
  signInWithPassword({ email, password }) {
    return async (dispatch) => {
      dispatch({ type: SIGN_IN_START });
      try {
        const { user, accessToken } = await api.signIn(email, password);
        dispatch({ type: SIGN_IN_SUCCESS, payload: { user, accessToken } });
        // TODO: Save el access token como local storage
      } catch (error) {
        dispatch({ type: SIGN_IN_ERROR, payload: { error } });
      }
    };
  },
  signOut(accessToken) {
    return async (dispatch) => {
      // TODO: Remove token of local storage
      await api.revokeToken(accessToken);
      dispatch({ type: SIGN_OUT });
    };
  },
  signUp(signUpForm) {
    return async (dispatch) => {
      dispatch({ type: SIGN_UP_START });
      try {
        const { user, accessToken } = await api.signUp(signUpForm);
        dispatch({ type: SIGN_UP_SUCCESS, payload: { user, accessToken } });
        // TODO: Save el access token como local storage
      } catch (error) {
        dispatch({ type: SIGN_UP_ERROR, payload: { error } });
      }
    };
  },
};

const ACTIONS = {
  [SIGN_IN_START](state) {
    return state;
  },
  [SIGN_IN_SUCCESS](state, { user, accessToken }) {
    return { ...state, user, accessToken };
  },
  [SIGN_IN_ERROR](state) {
    return state;
  },
  [SIGN_OUT](state) {
    return { ...state, user: null, accessToken: null };
  },
  [SIGN_UP_START](state) {
    return state;
  },
  [SIGN_UP_SUCCESS](state, { user, accessToken }) {
    return { ...state, user, accessToken };
  },
  [SIGN_UP_ERROR](state) {
    return state;
  },
};

function reducer(state = DEFAULT_STATE, action = {}) {
  if (ACTIONS[action.type]) {
    return ACTIONS[action.type](state, action.payload);
  }
  return state;
}

export { actions as accountActions };

export default reducer;
