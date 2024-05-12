import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './components/Login/index.tsx'
import Signup from './components/Signup/index.tsx'

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
  }

]
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
 <RouterProvider router={router} /> 
)