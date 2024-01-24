import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { Header } from './components/Header';

import { Home } from './pages/Home';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="container mx-auto">
        <Home />
      </div>
    </QueryClientProvider>
  );
}

export default App;
