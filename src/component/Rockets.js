/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reservation, cancelReservation } from '../redux/slice/rocketslice';

const Rockets = () => {
  const rocket = useSelector((state) => state.rocket);
  console.log('This is the state: ', rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  console.log('This is the sate revised: ', rocket);

  if ('data' in rocket && rocket.data != null) {
    return (
      <>
        {rocket.data.map((e) => (
          <div key={e.rocket_id} className="container-rocket-card">
            <div>
              <img className="rocket-image" src={e.flickr_images[0]} alt="logo" />
            </div>
            <div>
              <h2>{e.rocket_name}</h2>
              <p>
                {e.reserved && <span className="btn btn-primary me-1 disabled">Reserved</span>}
                {e.rocket_description}
              </p>
              {e.reserved && <button type="submit" className="btn   btn-outline-danger" onClick={() => dispatch(cancelReservation(e.rocket_id))}>Cancel Reservation</button>}
              {!e.reserved && <button type="submit" className="btn btn-primary" onClick={() => dispatch(reservation(e.rocket_id))}>Reserve Rocket</button>}
            </div>
          </div>
        ))}
      </>
    );
  }
  return 'Loading....';
};

export default Rockets;
