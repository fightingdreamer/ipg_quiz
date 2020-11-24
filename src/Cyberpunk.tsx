// packages

import React from 'react';

// UI_Cyberpunk components

import { ThemeProvider, createTheme, Arwes, Button } from 'arwes';

// pages

// import { PageQuiz } from './pages/PageQuiz';

// styles

import './styles/App.scss';

// code

function Cyberpunk() {
  return (
    <div className="App cyberpunk">
      <ThemeProvider theme={createTheme()}>
        <Arwes>
          <div style={{ padding: 20 }}>
            <Button>Play</Button>
          </div>
        </Arwes>
      </ThemeProvider>
    </div>
  );
}

export default Cyberpunk;
