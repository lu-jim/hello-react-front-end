const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST';
const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
const GET_MESSAGE_FAILURE = 'GET_MESSAGE_FAILURE';
const url = 'http://127.0.0.1:3060/';

const initialState = '';

const getMessageRequest = () => ({
  type: GET_MESSAGE_REQUEST,
});
const getMessageSuccess = (payload) => ({
  type: GET_MESSAGE_SUCCESS,
  payload,
});
const getMessageFailure = () => ({
  type: GET_MESSAGE_FAILURE,
});

export const getMessage = () => async (dispatch) => {
  dispatch(getMessageRequest());
  try {
    const response = await fetch(url);
    const json = await response.json();
    dispatch(getMessageSuccess(json.message));
  } catch (error) {
    dispatch(getMessageFailure);
  }
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return state;
    case GET_MESSAGE_SUCCESS:
      return payload;
    case GET_MESSAGE_FAILURE:
      return 'Loading failed';
  }
};

export default reducer;
