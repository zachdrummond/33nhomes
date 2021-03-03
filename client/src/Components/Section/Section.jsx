const Section = ({ title, image, text, direction }) => {
  return (
    <>
      <section className="my-5">
        <h2 className="text-center mb-4">{title}</h2>
        <div className="row">
          <div className="col-6 col-md">
            {direction == "left" ? image : direction == "right" ? text : ""}
          </div>
          <div className="col-6 col-md">
            {direction == "left" ? text : direction == "right" ? image : ""}
          </div>
        </div>
      </section>
      <hr />
    </>
  );
};

export default Section;
