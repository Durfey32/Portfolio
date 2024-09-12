import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouteProvider } from 'react-router-dom'

import App from './App';
import Error from './components/Error';
import Portfolio from './components/Portfolio';
import Author from '.components/Author';
import Contact from './components/Contact';

import Resume from './components/Resume';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/Portfolio',
        element: <Portfolio />
      },
      {
        path: '/author',
        element: <Author />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/resume',
        element: <Resume />
      }
],
  }
]);

ReactDOM.creatRoot(document.getElementById('root')).render(
  <RouteProvider router={router} />
);