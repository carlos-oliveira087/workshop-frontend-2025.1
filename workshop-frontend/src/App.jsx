import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';
import Booster from './components/Booster';

function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Cards" element={<Cards/>} />
          <Route path="/Booster" element={<Booster/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
