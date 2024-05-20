import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import HomePage from './pages/HomePage/HomePage.tsx'
import { Layout } from './components/shared/Layout/layout.tsx'
import Tours from './pages/Tours/Tours.tsx'
import Map from './pages/Map/Map.tsx'
import Profile from './pages/Profile/Profile.tsx'
import Verify from './components/Verify/Verify.tsx';

const router = createBrowserRouter([{
  element: (
    <Layout/>
  ),
  children:[
    {
      path:'/homepage',
      element:<HomePage />,
    },
    {
      path:'/tour',
      element:<Tours />,
    },
    {
      path:'/map',
      element:<Map />,
    },
    {
      path:'/profile',
      element:<Profile />,
    },
  ]
},

  {
    path:'/',
    element:<App />,
  },
  {
    path:'/login',
    element:<Login />,
  },
  {
    path:'/signup',
    element:<Signup />,
  },
  {
    path:'/verify',
    element:<Verify />,
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <><RouterProvider router={router} /></> 
)