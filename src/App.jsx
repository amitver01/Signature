import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Sign from "./pages/Sign";
import "./App.css";
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <Router>
      <div className='m-8 p-5 '> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/text" element={< Upcoming/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
