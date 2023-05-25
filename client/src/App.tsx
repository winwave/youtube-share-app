import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage/HomePage";
import {SharePage} from "./pages/SharePage/SharePage";

function App() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/share' element={<SharePage />} />
        </Routes>
    </div>
  );
}

export default App;
