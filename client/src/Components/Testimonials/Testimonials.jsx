const Testimonials = ({ id }) => {
  
  const styles = {
    card: {
      backgroundColor: "#dbe3e2",
    },
  };

  // Customer Reviews
  const reviews = [
    {
      name: "Person 1",
      feedback:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, aliquid! Quae maxime consectetur eligendi dolor sunt doloremque corrupti, assumenda excepturi facilis numquam quam, officiis, delectus fuga reiciendis animi ipsa quisquam!",
    },
    {
      name: "Person 2",
      feedback:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At fugiat perspiciatis, eveniet repellendus doloremque suscipit ut nobis facilis ex neque officia quo rerum, laborum magnam! Magni quo accusantium asperiores reprehenderit?",
    },
    {
      name: "Person 3",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia itaque odio praesentium consequuntur temporibus ea architecto quidem est ad maiores veniam pariatur, dolores recusandae nostrum doloribus ratione nam voluptatem quo!",
    },
    {
      name: "Person 4",
      feedback:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, esse? Facilis, voluptate dolores! Deserunt vero itaque autem iste illum explicabo aliquam, rem molestiae optio eos, eveniet ex. Laudantium, incidunt molestias.",
    },
    {
      name: "Person 5",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum explicabo hic possimus, blanditiis ab sapiente libero impedit error cupiditate consequuntur natus placeat sint expedita sequi fugiat necessitatibus temporibus? Optio, ratione?",
    },
    {
      name: "Person 6",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis fuga itaque unde sunt rerum quia explicabo quod aspernatur saepe beatae animi dicta, nemo voluptatibus. Incidunt minima nemo tempora debitis perspiciatis.",
    },
  ];

  return (
    <>
      <section id={id} className="py-5">
        <h1 className="text-center mb-4">Customer Reviews</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {reviews.map((review) => {
            return (
              <div key={review.name} className="col">
                <div className="card h-100" style={styles.card}>
                  <div className="card-body text-center">
                    <p className="card-text">{review.feedback}</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="currentColor"
                      className="bi bi-chat-square-quote-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
                    </svg>
                    <h5 className="card-title">{review.name}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <hr />
    </>
  );
};

export default Testimonials;
