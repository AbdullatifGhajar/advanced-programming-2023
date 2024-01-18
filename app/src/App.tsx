import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import DocumentDetails from './DocumentDetails';
import Header from './components/Header';
import PageBody from './components/PageBody';
import DocumentList from './DocumentList';
import Register from './components/Register';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={
            <>
              <Header />
              <PageBody>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/documents" element={<DocumentList />} />
                  <Route path="/documents/:id" element={<DocumentDetails />} />
                </Routes>
              </PageBody>
            </>
          } />
          </Routes>
      </Router>
    </>
  );
}

export default App;
