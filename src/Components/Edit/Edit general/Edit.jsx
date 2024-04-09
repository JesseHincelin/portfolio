import { Outlet } from "react-router-dom";
import SideNav from "../../SideNav/SideNav";
import "./Edit.scss";

const Edit = () => {
  return (
    <main className="block">
      <Outlet />
      <SideNav />
    </main>
  );
};

export default Edit;
