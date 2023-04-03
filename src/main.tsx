import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import App from './App';

import './styles/bootstrap-custom.css';
import './styles/index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'normalize.css';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
const isProd = process.env.NODE_ENV === 'production';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={isProd ? 'https://ekdldksp123.github.io/ecommerce-mvp/' : ''}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
