// packages

import React from 'react';

// React Context API

import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import { PointsProvider } from './context/PointsContext';

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
        <UserProvider>
          <PointsProvider>
            <PageQuiz />
          </PointsProvider>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
