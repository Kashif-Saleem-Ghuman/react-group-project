/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { userEvent } from '@testing-library/user-event';
import store from '../redux/store';
import Missions from '../component/Missions';
import App from '../App';

describe('Missions', () => {
  it('renders Missions component', () => {
    const m = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <Missions />
        </BrowserRouter>
      </Provider>,
    ).toJSON();
    expect(m).toMatchSnapshot();
  });
});

const MissionMock = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

describe('Missions', () => {
  it('renders Missions component', () => {
    render(<MissionMock />);
    const mission = screen.getByText('Missions');
    expect(mission).toMatchInlineSnapshot(`
<a
  class="inactive"
  href="/missions"
>
  Missions
</a>
`);
  });
});
