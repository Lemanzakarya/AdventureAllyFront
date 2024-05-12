import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/HomePage'

const Layout =()=>{
  return(
    <div>
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([{
  path:'/',
  element:<Layout />,
  children:[{
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
    path:'/homepage',
    element:<Home />,
  }

]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <><RouterProvider router={router} /></> 
)