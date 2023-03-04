import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Movies from '../components/Details';
import store from '../redux/store';
import Shows from '../Display/Homepage';

describe('Testing components', () => {
  it('renders Movies component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Movies />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders Homepage component', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Shows />
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
