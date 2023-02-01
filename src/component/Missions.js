/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const mission = useSelector((state) => state.mission);
  console.log('This is the state: ', mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="mission-card">
      <h2>Missions</h2>
    </div>
  );
};

export default Missions;
