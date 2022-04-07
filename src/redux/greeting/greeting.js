const GET_MESSAGE_REQUEST = 'GET_MESSAGE_REQUEST';
const GET_MESSAGE_SUCCESS = 'GET_MESSAGE_SUCCESS';
const GET_MESSAGE_FAILURE = 'GET_MESSAGE_FAILURE';
const url = '/v1/messages';

const initialState = '';

const getMessageRequest = () => ({
  type: GET_MESSAGE_REQUEST
})
const getMessageSuccess = (payload) => ({
  type: GET_MESSAGE_SUCCESS,
  payload
})
const getMessageFailure = () => ({
  type: GET_MESSAGE_FAILURE
})

export const getMessage = () => {
  return async (dispatch) => {
    dispatch(getMessageRequest());
    try {
      const response = await fetch(url);
      const json = await response.json()
      dispatch(getMessageSuccess(json.message))
    }
    catch (error) {
      dispatch(getMessageFailure)
    }
  }
}

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
