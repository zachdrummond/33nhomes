const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          33 North Homes & Construction LLC
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Kitchen Remodeling
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Bathroom Remodeling
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Home Renovation and Additions
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Our Process
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Contact Us
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pricing
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Kitchen Remodel Pricing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Bathroom Remodel Pricing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Home Renovation and Additions Pricing
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                (404) 992-8752
              </a>
            </li>
          </ul>
          <button type="button" class="btn btn-danger">
            Get a Quote
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
