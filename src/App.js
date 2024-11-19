import './App.css';
import Booking from './components/booking/booking';
import Home from './components/home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book' element={<Booking/>}/>
        </Routes>
    </div>
  );
}

export default App;
