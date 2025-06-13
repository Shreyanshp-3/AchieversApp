import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './components/Aboutus/Aboutus';
import Contactus from './components/Contactus/Contactus';
import Homepage from './components/Homepage';
import Testprep from './components/Services/TestPrep/Testprep';
import Gre from './components/Services/TestPrep/Tests/Gre';
import Sat from './components/Services/TestPrep/Tests/Sat';
import Tofel from './components/Services/TestPrep/Tests/Tofel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/testprep" element={<Testprep />} />
        <Route path="/testprep/Gre" element={<Gre />} />
        <Route path="/testprep/Sat" element={<Sat />} />
        <Route path="/testprep/Tofel" element={<Tofel />} />
      </Routes>
    </Router>
  );
}

export default App;
