const DropdownItem = ({ name }) => {
  // Navbar Menu Items
  const menuItems = [
    {
      name: "Services",
      options: ["Kitchen Remodeling", "Basement Remodeling", "Home Additions"],
    },
    {
      name: "About",
      options: ["About Us", "Philosophy", "Testimonials", "Contact Us"],
    },
  ];

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        id="navbarDropdownMenuLink"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {name}
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        {/* Maps through the menuItems to list them in the Navbar*/}
        {menuItems.map((item) => {
          if (name === item.name) {
            return item.options.map((options) => {
              return (
                <li key={options}>
                  <a
                    className="dropdown-item"
                    href={`#${options}`}
                  >
                    {options}
                  </a>
                </li>
              );
            });
          }
        })}
      </ul>
    </li>
  );
};

export default DropdownItem;
