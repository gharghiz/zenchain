import React from 'react';
import { Link } from 'react-router-dom';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center space-x-4">
          <img src="/assets/ztc-logo.png" alt="ZTC" className="w-12 h-12 rounded-full shadow-md" />
          <h1 className="text-2xl font-bold tracking-wide">ZenChain Swap</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-yellow-300 transition-colors duration-200 font-medium">Swap</Link>
          <Link to="/analytics" className="hover:text-yellow-300 transition-colors duration-200 font-medium">Analytics</Link>
          <Link to="/learn" className="hover:text-yellow-300 transition-colors duration-200 font-medium">Learn</Link>
          <Link to="/staking" className="hover:text-yellow-300 transition-colors duration-200 font-medium">Staking</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition">
            {darkMode ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
          </button>
          <a href="https://twitter.com/zenchain" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/assets/twitter-icon.png" alt="Twitter" className="w-8 h-8" />
          </a>
          <a href="https://discord.gg/zenchain" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
            <img src="/assets/discord-icon.png" alt="Discord" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
