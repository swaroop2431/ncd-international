import './App.css';
import routes from './routes/routes';
import Layout from './components/Layout';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {
  const router= createBrowserRouter([
    {
      element: <Layout />,
      children: routes
    },
  ])
  return <RouterProvider router={router} />;
}

export default App;
