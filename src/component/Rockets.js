import React from 'react';
import { useSelector } from 'react-redux';
import rockets from '../images/rockets.jpg';

const Rockets = () => {
  const rocket = useSelector((state) => state.rocket);
  console.log(rocket);
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
