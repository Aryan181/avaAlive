import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimatedLoginPage from './AnimatedLoginPage';
import NewComponent from './NewComponent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AnimatedLoginPage />} />
        <Route path="/new-component" element={<NewComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
