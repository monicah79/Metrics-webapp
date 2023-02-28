import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shows from "./Display/Homepage";
import Singleshow from "./Display/singleShow";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={< Shows />} />
        <Route path="/singleShow" element={< Singleshow />} />
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;