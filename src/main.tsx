import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/Login.tsx';
import SignupPage from './pages/Signup.tsx';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage/>,
  },

  {
    path: "/signup",
    element: <SignupPage/>, 
  
  },

  {
    path: "/",
    element: <App/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
      <RouterProvider router={router} />
  </>
)
