const LOAD = 'auth/LOAD';
const LOAD_SUCCESS = 'auth/LOAD_SUCCESS';
const LOAD_FAIL = 'auth/LOAD_FAIL';
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';
const LOGOUT = 'auth/LOGOUT';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAIL = 'auth/LOGOUT_FAIL';
const EMAIL_UPDATE = 'auth/EMAIL_UPDATE'

const initialState = {
  email: {
    asyncValid: false,
    asyncValidating: false,
    errorTxt: null,
    helpTxt: 'Please enter your email address',
    initial: '',
    value: '',
    visited: false,
  },
  isAuthenticated: false,
  loaded: false,
  loading: false,
  user: {
    id: null,
    email: null
  }
};

// I want to type check values.
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case EMAIL_UPDATE:
      return {
        ...state,
        email: {
          ...state.email,
          value: email
        }
      }
    case LOAD:
      return {
        ...state,
        loading: true
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.result
      };
    case LOAD_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.error
      };
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.result
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loggingIn: false,
        user: null,
        loginError: action.error
      };
    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggingOut: false,
        user: null
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        loggingOut: false,
        logoutError: action.error
      };
    default:
      return state;
  }
}

function fetchMe(email) {
  return dispatch => {
    dispatch(requestPosts(email));
    return fetch(`https://www.cape.io/user/email/${email}`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)));
  };
}
export function updateEmail(email) {
  return {
    type: EMAIL_UPDATE,
    payload: email
  }
}

export function isLoaded(globalState) {
  return globalState.auth && globalState.auth.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: (client) => client.get('/loadAuth')
  };
}

export function login(name) {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: (client) => client.post('/login', {
      data: {
        name: name
      }
    })
  };
}

export function logout() {
  return {
    types: [LOGOUT, LOGOUT_SUCCESS, LOGOUT_FAIL],
    promise: (client) => client.get('/logout')
  };
}
