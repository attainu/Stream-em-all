import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './User/userReducer';

const configStore = () => {
  const store = createStore(
    userReducer,
    composeWithDevTools(applyMiddleware())
  );
  return store;
};

export default configStore;
