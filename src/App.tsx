import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import StudentDashboard from './pages/StudentDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
// import Curriculum from './pages/Curriculum';
import GameCenter from './pages/GameCenter';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/student-dashboard" element={<StudentDashboard />} />
            <Route path="/teacher-dashboard" element={<TeacherDashboard />} />
            {/* <Route path="/curriculum" element={<Curriculum />} /> */}
            <Route path="/game-center" element={<GameCenter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;