import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import DocumentList from './DocumentList';
import DocumentDetails from './DocumentDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DocumentList />} />
        <Route path="/document/:id" element={<DocumentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
