import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import './index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './providers/AuthProvider';
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-screen-xl mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </AuthProvider>
    </React.StrictMode >
  </div>
  ,
)
