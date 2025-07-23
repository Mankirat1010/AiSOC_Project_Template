import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/registerPage';
import TeacherDashboard from './pages/TeacherDashboard';
import ProjectDetails from './pages/ProjectDetails';
import ApplyPage from './pages/ApplyPage';
import LoginPage from './pages/loginPage';
import CreateProject from './pages/CreateProjectPage';  
import ScrollToTop from "./components/ScrollToTop";
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ApplicantsPage from './pages/Applicants';
import MyApplications from './pages/MyApplications';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/project" element={<ProjectDetails />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/project/create" element={<CreateProject />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/applicants" element={<ApplicantsPage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/my-applications" element={<MyApplications />} />
      </Routes>
    </Router>
  );
}

export default App;
