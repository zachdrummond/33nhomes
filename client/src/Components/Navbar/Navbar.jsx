import { Link } from "react-scroll";
import DropdownItem from "./DropdownItem";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        {/* --------------------------------------------------------------- BRAND LOGO */}
        <a className="navbar-brand" href="/">
          33 North Homes & Construction LLC
        </a>
        {/* --------------------------------------------------------------- NAVBAR TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* --------------------------------------------------------------- NAVBAR MENU ITEMS */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <DropdownItem name="Services" />
            <DropdownItem name="About" />
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="tel: +(404) 992-8752"
              >
                (404) 992-8752
              </a>
            </li>
          </ul>
          {/* --------------------------------------------------------------- GET A QUOTE BUTTON */}
          <Link className="btn btn-danger" to="Contact Us" offset={-100}>
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
