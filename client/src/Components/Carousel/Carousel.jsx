import basement from "../../images/basement.jpg";
import kitchen from "../../images/kitchen.jpg";

const Carousel = () => {

  const styles = {
    carousel: {
      height: 500
    }
  };

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      {/* -------------------------------------------------------------------- CAROUSEL INDICATORS */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>
      {/* -------------------------------------------------------------------- CAROUSEL IMAGES */}
      <div className="carousel-inner" style={styles.carousel}>
        <div className="carousel-item active">
          <img src={basement} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={kitchen} className="d-block w-100" alt="..." />
        </div>
      </div>
      {/* -------------------------------------------------------------------- CAROUSEL CONTROLS */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
