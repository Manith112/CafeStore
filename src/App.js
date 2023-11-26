
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Available from './Available';
import Cafe from './Cafe';

import React from 'react';
import Main from './Main';


function App() {
  return (
    <div>
     <Main />
     <Routes>
     
        <Route path="/popular"  element={<Cafe />}></Route>
        <Route path="/available"  element={<Available />}></Route>
</Routes>
</div>  


        
  );
}

export default App;
