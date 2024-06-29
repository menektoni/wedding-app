import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FormPage from './components/FormPage';
import PlansPage from './components/PlansPage';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      {/* Define routes or conditionally render components based on URL */}
      {/* Example: use React Router for more complex routing */}
      <Footer />
    </>
  );
};

export default App;
