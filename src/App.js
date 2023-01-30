import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Nav from './component/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;
