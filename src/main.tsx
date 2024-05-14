import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import HomePage from './pages/HomePage/HomePage.tsx'
import { Layout } from './components/shared/Layout/index.tsx'
import Search from './pages/Search/Search.tsx'
import Tours from './pages/Tours/Tours.tsx'
import Map from './pages/Map/Map.tsx'
import Profile from './pages/Profile/Profile.tsx'

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
      path:'/search',
      element:<Search />,
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

])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <><RouterProvider router={router} /></> 
)