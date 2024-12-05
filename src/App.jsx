import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Test from './test';
import BrowseCharacters from './components/BrowseCharacters';
import CharacterDetails from './components/CharacterDetails';
import Comics from './components/Comics';
import Navigation from './components/Navigation';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Test />} />
        <Route path="/browse" element={<BrowseCharacters />} />
        <Route path="/details/:characterId" element={<CharacterDetails />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
