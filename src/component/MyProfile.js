/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
// import { joinMission } from '../redux/missions/missions';

const MyProfile = () => {
  const mission = useSelector((state) => state.mission);
  const rockets = useSelector((state) => state.rocket);
  const joined = mission.filter((m) => m.reserved);
  const reserved = rockets.data.filter((r) => r.reserved);
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-6">
          <h3>My Missions</h3>
          <Table bordered>
            <thead>
              <tr>
                {joined.length === 0 && (
                <th className="bg-danger p-3">No Missions Joined</th>
                )}
              </tr>
            </thead>
            <tbody>
              {joined.map((mission) => (
                <tr key={mission.mission_id}>
                  <td className="p-3">{mission.mission_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className="col-6">
          <h3>My Rockets</h3>
          <Table bordered>
            <thead>
              <tr>
                {reserved.length === 0 && (
                <th className="bg-danger p-3">No Rockets Reserved</th>
                )}
              </tr>
            </thead>
            <tbody>
              {reserved.map((rocket) => (
                <tr key={rocket.rocket_id}>
                  <td className="p-3">{rocket.rocket_name}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
