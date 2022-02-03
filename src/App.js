import React, { useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import './App.css';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import PostPage from './pages/PostPage';
import { FeedbackProvider } from './context/FeedbackContext';

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/post/*' element={<PostPage />} />
            <Route path='/post/:id/:name' element={<PostPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
