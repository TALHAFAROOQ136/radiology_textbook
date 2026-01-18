import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@theme/Layout';
import Navbar from '@theme/Navbar';
import Footer from '@theme/Footer';

// Mock components for the radiology textbook platform
const HomePage = React.lazy(() => import('./Home/Home'));
const ContentPage = React.lazy(() => import('./Content/Content'));
const AuthPage = React.lazy(() => import('./Auth/Auth'));
const DashboardPage = React.lazy(() => import('./Dashboard/Dashboard'));
const NotFoundPage = React.lazy(() => import('./NotFound/NotFound'));

const App = () => {
  return (
    <Router>
      <Layout
        title="Radiology Textbook Platform"
        description="Comprehensive Radiology Education for Medical Students and Healthcare Professionals">
        <Navbar />

        <main>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/content/*" element={<ContentPage />} />
              <Route path="/auth/*" element={<AuthPage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </React.Suspense>
        </main>

        <Footer />
      </Layout>
    </Router>
  );
};

export default App;