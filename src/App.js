import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './components/Aboutus/Aboutus';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
