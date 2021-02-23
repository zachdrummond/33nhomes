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
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      {/* -------------------------------------------------------------------- CAROUSEL INDICATORS */}
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
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
      <div class="carousel-inner" style={styles.carousel}>
        <div class="carousel-item active">
          <img src={basement} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={kitchen} class="d-block w-100" alt="..." />
        </div>
      </div>
      {/* -------------------------------------------------------------------- CAROUSEL CONTROLS */}
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;