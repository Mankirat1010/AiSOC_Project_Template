import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/registerPage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import ProjectDetails from './pages/ProjectDetails';
import ApplyPage from './pages/ApplyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/project" element={<ProjectDetails />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
