import "./Layout.scss";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <Outlet />
    </div>
  );
}
