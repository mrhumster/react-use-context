import React from 'react';
import './App.css';
import {UserProvider} from "./App/context/userDetails";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ProtectedRoute} from "./App/routes/ProtectedRouter";
import LoginPage from './App/components/LoginPage';
import Home from "./App/components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <UserProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
                />
                <Route path='/login' element={<LoginPage />}/>
            </Routes>
        </BrowserRouter>
      </UserProvider>
  );
}

export default App;
