import GitHub from "../Icons/GitHub";
import Facebook from "../Icons/Facebook";
import Phone from "../Icons/Phone";
import Email from "../Icons/Email";

const Footer = () => {

  const styles = {
    footer: {
      backgroundColor: "#6f908b",
    },
  };

  return (
    <footer className="py-3 bg-dark text-light">
      <div className="container text-center bg-dark pb-1">
        <div className="row">
          {/* ---------------------------------------------------------------------------- Logo & Social Media */}
          <div className="col-12 col-md">
            <h4>33 North Homes & Construction LLC</h4>
            <Facebook />
          </div>
          {/* ---------------------------------------------------------------------------- Contact Info */}
          <div className="col-6 col-md">
            <h4>Contact Info</h4>
            <ul className="list-unstyled">
              <li>
                <Phone />
              </li>
              <li>
                <Email />
              </li>
            </ul>
          </div>
          {/* ---------------------------------------------------------------------------- About Us */}
          <div className="col-6 col-md">
            <h4>About Us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" className="text-light">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------- Company & Website Designer */}
        <hr />
        <div className="row">
          <h5>
            &copy;{new Date().getFullYear()} | 33 North Homes & Construction LLC
            | All Rights Reserved
          </h5>
          <div className="col-12 col-md">
            <span>Website Designed by Zach Drummond </span>
            <GitHub />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
