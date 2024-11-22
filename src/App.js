import './App.css';
import Booking from './components/booking/booking';
import Home from './components/home';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book' element={<Booking/>}/>
        </Routes>
    </Router>
  );
}

export default App;
