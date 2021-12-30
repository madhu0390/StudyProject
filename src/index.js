import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import reducer from './reducer'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Task } from './store/ducks/task'
import GlobalStyles from './GlobalStyles'

const rootReducer = combineReducers({
  Task,
  counter:reducer
})

const sagaMiddleware = createSagaMiddleware()
let store = createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

const MyAppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <MyAppWithStore />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
