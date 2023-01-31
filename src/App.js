import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import MyProfile from './component/MyProfile';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
