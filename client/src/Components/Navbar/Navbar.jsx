import { useState } from "react";
import DropdownItem from "./DropdownItem";

const Navbar = () => {

  const [menuBtn, setMenuBtn] = useState(false);

  const handleMenuBtn = () => {
    if(menuBtn == false){
      setMenuBtn(true);
    } else if (menuBtn == true){
      setMenuBtn(false);
    }
  }

  return (
    // Breakpoint: >= 768px (navbar-expand)
    <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top pt-1 pb-1">
      {/* --------------------------------------------------------------- BRAND LOGO */}
      <a className="navbar-brand" href="/">
        33 North Homes & Construction LLC
      </a>
      <div className="container justify-content-center">
        {/* --------------------------------------------------------------- NAVBAR TOGGLER */}
        <button
          className="navbar-toggler btn-lg mr-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleMenuBtn}
        >
          <span className="">Menu</span>
        </button>
        {menuBtn ? <a className="btn greenWhite" href="#Contact Us">
          Get a Quote
        </a> : ""}
        {/* --------------------------------------------------------------- NAVBAR MENU ITEMS */}
        <div
          className="collapse navbar-collapse text-center"
          id="navbarNavDropdown"
        >
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
        </div>
        {/* --------------------------------------------------------------- GET A QUOTE BUTTON */}
        {!menuBtn ? <a className="btn greenWhite" href="#Contact Us">
          Get a Quote
        </a> : ""}
      </div>
    </nav>
  );
};

export default Navbar;
