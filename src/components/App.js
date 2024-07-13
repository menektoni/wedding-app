import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import PlansPage from './components/PlansPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="spacer"></div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GeneralInfo" element={<FormPage />} />
        <Route path="/Planes" element={<PlansPage />} />
      {/* <HomePage /> */}
      {/* Define routes or conditionally render components based on URL */}
      {/* Example: use React Router for more complex routing */}
      </Routes>
      <Footer />
      </Router>
  );
};

export default App;
