
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './context/Header';
import Content from './context/Content';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
};

export default App;

