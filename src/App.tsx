import React from 'react';
import './App.css';
import {UserProvider} from "./App/context/userDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import SetUserDetails from "./App/components/SetUserDetails";
import FetchUserDetails from './App/components/FetachUserDetails';

function App() {
  return (
      <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SetUserDetails />} />
                <Route path="/user" element={<FetchUserDetails />} />
            </Routes>
        </BrowserRouter>
      </UserProvider>
  );
}

export default App;
