import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux'
import reducer from './reducer'
import { createStore, applyMiddleware,combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './store/rootSaga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Task } from './store/ducks/task'

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

describe("<App />", () => {

  test('render initial counter text',async () => {
    render(<MyAppWithStore />);

    const counterText = screen.getByTestId("counter-text");
    await expect(counterText).toHaveTextContent("0");
  });

  test('render buttons', () => {
    render(<MyAppWithStore />);

    const btnIncrement = screen.getByTestId("btn-increment");
    const btnDecrement = screen.getByTestId("btn-decrement");

    expect(btnIncrement).toBeInTheDocument();
    expect(btnIncrement.textContent).toEqual("Increment");

    expect(btnDecrement).toBeInTheDocument();
    expect(btnDecrement.textContent).toEqual("Decrement");
  });

});
