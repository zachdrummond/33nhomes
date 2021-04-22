const Section = ({ id, title, image, text, direction }) => {
  return (
    <>
      <section id={id} className="py-5">
        <h1 className="text-center mb-4">{title}</h1>
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
