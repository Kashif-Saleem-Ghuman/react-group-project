import missionsReducer, { joinMission, leaveMission } from '../redux/missions/missions';

describe('Test functionality of mission actions', () => {
  const mission = {
    mission_id: '9D1B7E0',
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: false,
  };

  const mission2 = {
    mission_id: '9D1B7E0',
    mission_name: 'Thaicom',
    description: 'Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.',
    reserved: true,
  };

  it('should return an action to join a mission', () => {
    expect(joinMission(mission)).toEqual({
      type: 'react-group-project/missions/JOIN_MISSION',
      payload: mission,
    });
  });

  it('should return an action to leave a mission', () => {
    expect(leaveMission(mission)).toEqual({
      type: 'react-group-project/missions/LEAVE_MISSION',
      payload: mission,
    });
  });

  it(' should return reserved true when joining a mission', () => {
    expect(missionsReducer([mission], joinMission(mission))).toEqual([mission2]);
  });

  it(' should return reserved false when leaving a mission', () => {
    expect(missionsReducer([mission2], leaveMission(mission2))).toEqual([mission]);
  });

  it(' should return reserved true when leaving a mission', () => {
    expect(missionsReducer([mission], leaveMission(mission))).not.toBe([mission]);
  });

  it('should return the initial state', () => {
    expect(missionsReducer(undefined, {})).toEqual([]);
  });
});
