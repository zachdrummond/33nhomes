import React from "react";

const AboutUs = () => {
  return (
    <section className="my-5">
      <h2 className="text-center mb-4">33 North Homes & Construction LLC</h2>
      <div className="row">
        <div className="col-6 col-md">
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
        </div>
        <div className="col-6 col-md">
          <p>
            At 33 North Homes & Construction LLC, we understand that
            construction is more than simply following drawings and making sure
            a structure is up to code. It’s about making your vision come to
            life. This means that details are as important as the end result –
            the way joints are placed together, the careful installation of
            materials to showcase their beauty, the final brush stroke that
            finishes a project.
          </p>
          <p>
            From concept to completion, we take the time to make sure each
            milestone is met with the highest level of craftsmanship and
            professionalism. We stand behind our work, warranty every job, and
            make sure our clients are involved every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
