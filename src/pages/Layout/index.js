import { Outlet, Link } from "react-router-dom";

import "./index.scss";
// TODO MENU TO OBJECT
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mall">Mall</Link>
          </li>
          <li>
            <Link to="/about">component props</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
