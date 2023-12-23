import './assets/css/style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './views/Homepage';
import Employees from './views/Employees';

function App() {
    
  return (
    <div classNameName="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
