import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';

const Swap = lazy(() => import('./components/Swap'));
const Analytics = lazy(() => import('./components/Analytics'));
const Learn = lazy(() => import('./components/Learn'));
const Staking = lazy(() => import('./components/Staking'));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800 flex flex-col transition-colors duration-300">
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <main className="flex-grow container mx-auto p-4">
            <Suspense fallback={<div className="text-center py-10">جاري التحميل...</div>}>
              <Routes>
                <Route path="/" element={<Swap />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/learn" element={<Learn />} />
                <Route path="/staking" element={<Staking />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <Toaster position="top-right" />
      </Router>
    </div>
  );
}

export default App;
