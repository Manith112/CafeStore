
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Available from './Available';
import Cafe from './Cafe';

import React from 'react';


function App() {
  return (
    <div>
     
     <Routes>
     
        <Route path="/popular"  element={<Cafe />}></Route>
        <Route path="/available"  element={<Available />}></Route>
</Routes>
</div>  


        
  );
}

export default App;
