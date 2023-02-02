/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Nav from '../component/Nav';

describe('Nav', () => {
  it('renders Nav component', () => {
    const n = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Nav />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(n).toMatchSnapshot();
  });
});
