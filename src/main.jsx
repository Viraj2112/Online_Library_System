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
    errorElement: (
      <Suspense fallback={<div><h1>Loading...</h1></div>}>
        <Error/>
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: <MainComponent/>,
      },
      {
        path: '/browse-books',
        element: (
          <Suspense fallback={<div><h1>Loading...</h1></div>}>
            <Browsebooks/>
          </Suspense>
        )
      },
      {
        path: '/browse-books/:category',
        element: (
          <Suspense fallback={<div><h1>Loading...</h1></div>}>
            <Browsebooks/>
          </Suspense>
        )
      },
      {
        path: '/add-book',
        element: (
          <Suspense fallback={<div><h1>Loading...</h1></div>}>
            <Addbook/>
          </Suspense>
        )
      },
      {
        path: '/book-details/:id',
        element: (
          <Suspense fallback={<div><h1>Loading...</h1></div>}>
            <BookDetails/>
          </Suspense>
        )
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={aptRouter}/>
  </StrictMode>,
)
