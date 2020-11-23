import { createStore, combineReducers, applyMiddleware } from 'redux';
import pageReducer from './pages/reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'remote-redux-devtools';

const appStore = combineReducers({
  certainPageData: pageReducer,
});

export default createStore(
  appStore,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
