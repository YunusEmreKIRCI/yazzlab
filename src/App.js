
import Home from './pages/Home';
import List from './pages/List';
import Country from './pages/Country';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

function App() {
    
    
  
  return (
    <>
    
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/country" element={<Country />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
