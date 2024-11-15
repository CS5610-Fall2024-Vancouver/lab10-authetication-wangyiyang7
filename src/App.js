import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <Routes>
      <Route path="/profile" element={<ProtectedRoute component={Profile} />} />

      <Route path="/" element={<Navigate to="/profile" />} />
    </Routes>
  );
};

export default App;
