import Section from "../Components/Section/Section";

const Services = () => {
  return (
    <main className="container">
      {/* --------------------------------------------------------------- KITCHEN REMODELING */}
      <Section
        id="Kitchen Remodeling"
        title="Kitchen Remodeling"
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            numquam beatae expedita architecto officiis! In praesentium a, fuga,
            repellat adipisci nesciunt sint aliquid odit accusamus earum minima
            quas consectetur! Deserunt! lorem
          </p>
        }
      />
      {/* --------------------------------------------------------------- BASEMENT REMODELING */}
      <Section
        id="Basement Remodeling"
        title="Basement Remodeling"
        direction="right"
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            numquam beatae expedita architecto officiis! In praesentium a, fuga,
            repellat adipisci nesciunt sint aliquid odit accusamus earum minima
            quas consectetur! Deserunt!
          </p>
        }
      />
      {/* --------------------------------------------------------------- HOME ADDITIONS */}
      <Section
        id="Home Additions"
        title="Home Additions"
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            numquam beatae expedita architecto officiis! In praesentium a, fuga,
            repellat adipisci nesciunt sint aliquid odit accusamus earum minima
            quas consectetur! Deserunt!
          </p>
        }
      />
    </main>
  );
};

export default Services;
