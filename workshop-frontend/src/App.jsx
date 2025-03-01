import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Cards from './components/Cards';

function App() {
  return (
    <Router>
      <div className=''>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/Cards" element={<Cards/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
