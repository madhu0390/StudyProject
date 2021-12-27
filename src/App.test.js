import { render, screen } from '@testing-library/react';
import App from './App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'
let store = createStore(reducer)

const MyAppWithStore = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

describe("<App />", () => {

  // test('render the title of an application', () => {
  //   render(<MyAppWithStore />);

  //   const titleEl = screen.getByText(/React App/);
  //   expect(titleEl).toBeInTheDocument();
  // });

  test('render initial counter text', () => {
    render(<MyAppWithStore />);

    const counterText = screen.getByTestId("counter-text");
    expect(counterText).toHaveTextContent("0");
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
