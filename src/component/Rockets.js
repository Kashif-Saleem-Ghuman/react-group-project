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

  // const rocketArr = Object.values(rocket);
  // console.log('onverted to Array: ', rocketArr);
  // const data = rocketArr[1];
  // console.log('this is data: ', data, typeof data);
  // const mappedState = rocket.data.map((item) => item);
  // console.log(mappedState);
  if ('data' in rocket && rocket.data != null) {
    rocket.data.forEach((e) => {
      console.log('E =', e.rocket_id);
    });
  }
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
