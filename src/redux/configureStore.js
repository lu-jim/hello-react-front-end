import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greeting/greeting';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
 greeting: greetingReducer,
});
const store = createStore(
  reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(logger, thunk),
  ),
);
export default store;
