import React from 'react';
import AppRoutes from './routes/AppRoute';
import { Analytics } from '@vercel/analytics/next';

const App = () => {
  return (
    <>
      <AppRoutes />
      <Analytics />
    </>
  );
};

export default App;
