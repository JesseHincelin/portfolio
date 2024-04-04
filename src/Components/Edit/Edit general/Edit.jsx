import { Outlet } from "react-router-dom";
import SideNav from "../../SideNav/SideNav";

const Edit = () => {
  return (
    <main className="block">
      <Outlet />
      <SideNav />
    </main>
  );
};

export default Edit;
