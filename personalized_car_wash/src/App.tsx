import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { AudioProvider } from './contexts/AudioContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import GeneratePage from './pages/GeneratePage';
import CarSelectionPage from './pages/CarSelectionPage';
import ConfirmationPage from './pages/ConfirmationPage';
import ResultsPage from './pages/ResultsPage';
import PartnersPage from './pages/PartnersPage';
import PrivacyPage from './pages/PrivacyPage';
import './App.css';

function App() {
  return (
    <UserProvider>
      <AudioProvider>
        <Router>
          <div className="min-h-screen bg-gray-900 transition-colors duration-300">
            <Header />
            <main className="pb-20">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/generate" element={<GeneratePage />} />
                <Route path="/car-selection" element={<CarSelectionPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AudioProvider>
    </UserProvider>
  );
}

export default App;