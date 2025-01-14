import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='ml-60 w-full'>
        <Outlet />
      </div>
    </div>
  );
};
