
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Roompage from './Pages/Roompage';
import Booking from './Pages/Bookingpage';
import NewBookingPage from './Pages/NewBookingPage';


function App() {
  return (
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Homepage/>} />
        <Route path='/room' element={<Roompage/>} />
        <Route path='/booking' element={<Booking/>} />
        <Route path='/newbooking' element={<NewBookingPage/>} />
        <Route path='/booking/:id' element={<NewBookingPage/>} />

      </Routes>
      </BrowserRouter>

  );
}

export default App;
