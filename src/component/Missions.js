/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissions } from '../redux/missions/missions';

const Missions = () => {
  const mission = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="container mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {mission.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="col-2">{mission.mission_name}</td>
              <td className="col-6">{mission.description}</td>
              <td className="col-2 text-center pt-5">NOT A MEMBER</td>
              <td className="col-2 text-center pt-5"><button type="button" className="align-self-center btn btn-primary">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
