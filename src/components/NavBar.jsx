import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <ul className="bg-gray-800 flex font-bold text-xl text-white flex-row justify-between px-4 py-4">
        <NavItem to="/">Salida M</NavItem>
        <div className="flex flex-row gap-[50px]">
          <NavItem to="/about">About Me</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          <NavItem to="/resume">Resume</NavItem>
        </div>
      </ul>
    </nav>
  );
}

function NavItem({ to, children }) {
  return (
    <li className="hover:underline font-bold">
      <Link to={to}> {children} </Link>
    </li>
  );
}
