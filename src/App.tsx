// packages

import React from 'react';

// React Context API

import { ThemeProvider } from './context/ThemeContext';

// pages

import { PageQuiz } from './pages/PageQuiz';

// styles

import './styles/App.scss';

// code

function App() {
  return (
    <div className="App material">
      {/* default active theme */}
      <ThemeProvider>
        <PageQuiz />
      </ThemeProvider>
    </div>
  );
}

export default App;
