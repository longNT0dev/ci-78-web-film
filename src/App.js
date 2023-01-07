import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./components/SignupPage/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/HomePage/HomePage";
import FilmContainer from "./components/FilmContainer/FilmContainer";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";


function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          
          {/* Giao diện chứa film khi đăng nhập vào */}
          <Route
            path="/films"
            element={
              <PrivateRoute>
                <FilmContainer />
              </PrivateRoute>
            }
          />
          {/* <Route
            path="/films/:id"
            element={
              <PrivateRoute>
                <FilmDetailContainer />
              </PrivateRoute>
            }
          /> */}
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
