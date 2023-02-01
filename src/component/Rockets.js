import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import rockets from '../images/rockets.jpg';
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
              <img className="rocket-image" src={rockets} alt="logo" />
            </div>
            <div>
              <h2>{e.rocket_name}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
                vitae porro ducimus ab cupiditate maiores corporis et nostrum dolores in!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
                vitae porro ducimus ab cupiditate maiores corporis et nostrum dolores in!
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero,
              </p>
              <button type="submit" className="btn btn-primary">Reserve Rocket</button>
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return <p>No rockets available</p>;
  }
};

export default Rockets;
