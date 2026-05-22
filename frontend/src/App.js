import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import AdminDashboard from './components/AdminDashboard';


function App() {

  const user = JSON.parse(
    localStorage.getItem('user')
  );

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        {

          user &&
          user.role === 'admin' && (

            <Route

              path="/admin"

              element={
                <AdminDashboard />
              }

            />

          )

        }

      </Routes>

    </BrowserRouter>

  );

}

export default App;