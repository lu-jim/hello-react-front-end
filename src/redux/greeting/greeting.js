const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST';
const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
const GET_MESSAGE_FAILURE = 'GET_MESSAGE_FAILURE';
const url = 'http://localhost:8000/';

const initialState = {
  loading: false,
  message: [],
  error: null,
};

export const getMessage = () => async (dispatch) => {
  dispatch({ type: GET_MESSAGE_REQUEST });
  fetch(url)
    .then((result) => result.json())
    .then((message) => {
      dispatch({ type: GET_MESSAGE_SUCCESS, payload: message.greeting });
    })
    .catch((err) => dispatch({ type: GET_MESSAGE_FAILURE, payload: err }));
  return true;
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case GET_MESSAGE_REQUEST:
      return { ...state, loading: true };
    case GET_MESSAGE_SUCCESS:
      return { ...state, loading: false, message: payload };
    case GET_MESSAGE_FAILURE:
      return { ...state, loading: false, error: payload };
  }
};

export default reducer;
