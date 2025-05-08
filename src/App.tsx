import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FundamentalsPage from './pages/FundamentalsPage';
import MathFoundationsPage from './pages/MathFoundationsPage';
import AlgorithmsPage from './pages/AlgorithmsPage';
import VectorAnalysisPage from './pages/VectorAnalysisPage';
import AdvancedTopicsPage from './pages/AdvancedTopicsPage';
import ResourcesPage from './pages/ResourcesPage';
import FeedbackPage from './pages/FeedbackPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="fundamentals" element={<FundamentalsPage />} />
          <Route path="math-foundations" element={<MathFoundationsPage />} />
          <Route path="algorithms" element={<AlgorithmsPage />} />
          <Route path="vector-analysis" element={<VectorAnalysisPage />} />
          <Route path="advanced-topics" element={<AdvancedTopicsPage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="feedback" element={<FeedbackPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;