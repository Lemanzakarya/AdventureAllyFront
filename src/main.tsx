import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import HomePage from './pages/HomePage.tsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
  },
  {
    path:'/homepage',
    element:<HomePage />,
  },

  {
    path:'login',
    element:<Login />,
  },

  {
    path:'signup',
    element:<Signup />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <><RouterProvider router={router} /></> 
)