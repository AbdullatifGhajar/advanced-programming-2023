import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

//import DocumentList from './DocumentList';
import HomePage from './pages/HomePage';
import DocumentDetails from './DocumentDetails';
import Header from './components/Header';

function App() {
  return (
    <>

    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/document/1" element={<DocumentDetails />}></Route>
      </Routes>
    </Router>
    </>
  );
}


export default App;
