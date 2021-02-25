import "./Footer.css";
import GitHub from "../Icons/GitHub";
import Facebook from "../Icons/Facebook";
import Phone from "../Icons/Phone";
import Email from "../Icons/Email";

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark py-3">
      <div className="container text-center text-light">
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
                <a href="/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------- Company & Website Designer */}
        <hr />
        <div className="row">
          <p>
            &copy;{new Date().getFullYear()} | 33 North Homes & Construction LLC
            | All Rights Reserved
          </p>
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
