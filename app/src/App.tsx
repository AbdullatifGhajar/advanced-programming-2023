import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import DocumentDetails from './DocumentDetails';
import Header from './components/Header';
import PageBody from './components/PageBody';

function App() {
  return (
    <>
      <Router>
        <Header />
        <PageBody>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/document/1" element={<DocumentDetails />}></Route>
          </Routes>
        </PageBody>
      </Router>
    </>
  );
}

export default App;
