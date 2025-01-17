import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainComponent from './Components/MainComponent.jsx';

const Browsebooks = lazy(() => import('./Components/Browsebooks.jsx'));
const Addbook = lazy(() => import('./Components/Addbook.jsx'));
const BookDetails = lazy(() => import('./Components/BookDetails.jsx'))
const Error = lazy(() => import('./Components/Error.jsx'));

const aptRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <MainComponent/>,
      },
      {
        path: '/browse-books',
        element: <Browsebooks/>
      },
      {
        path: '/browse-books/:category',
        element: <Browsebooks/>
      },
      {
        path: '/add-book',
        element: <Addbook/>
      },
      {
        path: '/book-details/:id',
        element: <BookDetails/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={aptRouter}/>
  </StrictMode>,
)
