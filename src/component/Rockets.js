/* eslint-disable no-console */
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
  return (
    <>
      <div className="container-rocket-card">
        <div>
          <img className="rocket-image" src={rockets} alt="logo" />
        </div>
        <div>
          <h2>Falcon 1</h2>
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
    </>
  );
};

export default Rockets;
