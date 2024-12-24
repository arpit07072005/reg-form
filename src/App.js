import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Background from './Component/Background';

import Inputs from './Component/Inputs';
import Verification from './Component/Verification';

function App() {
  return (
   <Router>
    <Background />
    <Routes>
      <Route path="/" element={<Inputs/>} />
      <Route path="/Verification" element={<Verification/>} />
    </Routes>
   </Router>
  );
}

export default App;