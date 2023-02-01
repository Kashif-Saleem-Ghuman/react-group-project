/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Missions from '../component/Missions';

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

//   it('renders Leave mission', () => {
//     render(
//       <Provider store={store}>
//         <BrowserRouter>
//           <Missions />
//         </BrowserRouter>
//       </Provider>,
//     );
//     userEvent.click(screen.getByRole('button', { Name: /Leave Mission/i }));
//     expect(screen.getByText(/Active Member/i)).toBeInTheDocument();
//   });
});
