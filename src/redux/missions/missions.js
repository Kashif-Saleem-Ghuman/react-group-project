/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';

// Action Types
const FETCH_MISSIONS = 'FETCH_MISSIONS';

// Action Creators
const fetchMissions = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  const missionsData = [];
  response.data.forEach((mission) => {
    missionsData.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
    });
  });
  dispatch({
    type: FETCH_MISSIONS,
    payload: missionsData,
  });
};

// Reducer
const missionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    default:
      return state;
  }
};

export { fetchMissions };
export default missionsReducer;
