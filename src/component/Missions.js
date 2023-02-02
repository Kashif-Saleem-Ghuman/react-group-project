/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missions';

const Missions = () => {
  const mission = useSelector((state) => state.mission);
  const dispatch = useDispatch();
  const shouldFetch = useRef(true);
  useEffect(() => {
    if (shouldFetch.current) {
      if (mission.length === 0) {
        shouldFetch.current = false;
        dispatch(fetchMissions());
      }
    }
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
              <th className="col-2">{mission.mission_name}</th>
              <td className="col-6">{mission.description}</td>
              <td className="col-2 text-center pt-5">
                {mission.reserved ? (<span className="bg-info text-white rounded-1 p-1">Active Member</span>)
                  : (<span className="bg-secondary text-white rounded-1 p-1">NOT A MEMBER</span>)}
              </td>
              <td className="col-2 text-center pt-5">
                {!mission.reserved && (
                  <button
                    type="submit"
                    className="btn btn-light border-2 border-secondary"
                    onClick={() => dispatch(joinMission(mission))}
                  >
                    Join Mission

                  </button>
                )}
                {mission.reserved && (
                  <button
                    name="leaveMission"
                    type="submit"
                    className="btn btn-light border-2 border-danger"
                    onClick={() => dispatch(leaveMission(mission))}
                  >
                    Leave Mission

                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Missions;
