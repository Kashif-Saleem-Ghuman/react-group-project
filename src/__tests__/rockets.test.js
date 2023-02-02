import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Rockets from '../component/Rockets';

describe('testing for rockets data', () => {
  it('test for component', () => {
    const test = render(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(test).toMatchSnapshot();
  });
});
