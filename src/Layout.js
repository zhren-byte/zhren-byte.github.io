import { Outlet} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Cronometro</span>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">Cronometro</a>
            </li>
            <li className="nav-item">
              <a href="test" className="nav-link">Timer</a>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;