import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import MyProfile from './component/MyProfile';
import Rockets from './component/Rockets';
import Missions from './component/Missions';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
