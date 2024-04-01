import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
export default function NavBar() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <nav className="bg-[url('./assets/images/backGround.png')]">
      <ul className="flex font-bold text-2xl text-white  justify-between px-12 py-6 flex-col sm:flex-row gap-5">
        <NavItem className={pathname === "/" ? "bg-blue-500" : ""} to="/">
          Salida{" "}
        </NavItem>
        <div className="flex flex-col gap-[30px] sm:flex-row">
          <NavItem
            className={pathname === "/about" ? "bg-blue-500" : ""}
            to="/about"
          >
            About Me
          </NavItem>
          <NavItem
            className={pathname === "/portfolio" ? "bg-blue-500" : ""}
            to="/portfolio"
          >
            Portfolio
          </NavItem>
          <NavItem
            className={pathname === "/contact" ? "bg-blue-500" : ""}
            to="/contact"
          >
            Contact
          </NavItem>
          <NavItem
            className={pathname === "/resume" ? "bg-blue-500" : ""}
            to="/resume"
          >
            Resume
          </NavItem>
        </div>
      </ul>
    </nav>
  );
}

function NavItem({ to, children, className }) {
  return (
    <li
      className={`hover:underline hover:underline-offset-4 font-bold px-2 rounded-md ${className}`}
    >
      <Link to={to}> {children} </Link>
    </li>
  );
}
