import './App.css';
import Booking from './components/booking/booking';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/book' element={<Booking/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
