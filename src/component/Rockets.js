import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/slice/rocketslice';

const Rockets = () => {
  const rocket = useSelector((state) => state.rocket);
  console.log('This is the state: ', rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  console.log('This is the sate revised: ', rocket);

  if ('data' in rocket && rocket.data != null) {
    // rocket.data.forEach((e) => {
    //   console.log('E =', e.rocket_id);
    // });

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
                {e.rocket_description}
              </p>
              <button type="submit" className="btn btn-primary">Reserve Rocket</button>
            </div>
          </div>
        ))}
      </>
    );
  }
  return 'one';
};

export default Rockets;
