/* eslint-disable no-console */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, reservation, cancelReservation } from '../redux/slice/rocketslice';

const Rockets = () => {
  const rocket = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);
  useEffect(() => {
    if (shouldFetch.current) {
      if (rocket.data.length === 0) {
        shouldFetch.current = false;
        dispatch(fetchRockets());
      }
    }
  }, [dispatch]);
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
