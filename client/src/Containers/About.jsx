import Section from "../Components/Section/Section";
import Testimonials from "../Components/Testimonials/Testimonials";
import Contact from "../Components/Contact/Contact";

const About = () => {
  return (
    <main className="container">
      {/* --------------------------------------------------------------- ABOUT US */}
      <Section
        id="About Us"
        title="33 North Homes & Construction LLC"
        direction="left"
        image={
          <svg
            className="bd-placeholder-img"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <rect width="100%" height="100%" fill="#777"></rect>
          </svg>
        }
        text={
          <p>
            At 33 North Homes & Construction LLC, we understand that
            construction is more than simply following drawings and making sure
            a structure is up to code. It’s about making your vision come to
            life. This means that details are as important as the end result –
            the way joints are placed together, the careful installation of
            materials to showcase their beauty, the final brush stroke that
            finishes a project. <br />
            <br />
            From concept to completion, we take the time to make sure each
            milestone is met with the highest level of craftsmanship and
            professionalism. We stand behind our work, warranty every job, and
            make sure our clients are involved every step of the way.
          </p>
        }
      />
      {/* --------------------------------------------------------------- PHILOSOPHY & BENEFITS */}
      <Section
        id="Philosophy"
        title="Philosophy & Benefits"
        direction="right"
        image={
          <ul>
            <li>State Licensed - RBCO006748</li>
            <li>Family Owned</li>
            <li>Friendly and Caring Staff</li>
            <li>Clean, Safe, and Organized Job Site</li>
            <li>Noticeably Detailed Finish Work</li>
            <li>2 Million General Liability Insurance</li>
            <li>Full Workers Compensation</li>
          </ul>
        }
        text={
          <p>
            33 North Homes & Construction is a experienced remodeler, serving as
            a general contractor in the North Georgia areas. Licensed by the
            Georgia State Board, we understand the importance of completing
            every job with 100% customer satisfaction, without any surprises or
            disappointments.
            <br />
            <br />
            We have built our business from the ground up with the help of a
            steady stream of referrals from satisfied and repeating customers.
            33 North Homes & Construction has earned the reputation as one of
            North Georgia's premiere go to contractors.
            <br />
            <br />
            In order to succeed in the construction industry, a general
            contractor must integrate superior craftsmanship, experience, and
            dedication within the company’s culture. But a contractor is only as
            good as his team — and we are committed to hiring experienced
            professionals who share in our commitment to quality.
            <br />
            <br />
            We believe that teamwork, integrity, honesty, and attention to
            detail each step of the way makes the best construction environment
            for everyone — which ultimately leads to greater customer
            satisfaction. Honesty, Reliability, and Superior Craftsmanship.
            <br />
            <br />
            Our focus is on providing excellent service and quality workmanship
            for all clients. From the start of estimating, through the rough
            construction phase we maintain full control ensuring that every
            stage of the way is done with detail. In the end we deliver a space
            that is warm, clean, stylish, and contemporary.
          </p>
        }
      />
      <Testimonials id="Testimonials"/>
      <Contact id="Contact Us"/>
    </main>
  );
};

export default About;
