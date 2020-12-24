import { combineReducers } from 'redux';

import SessionErrorsReducer from './session_errors_reducer';
import TweetsErrorsReducer from './tweets_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  tweets: TweetsErrorsReducer
});