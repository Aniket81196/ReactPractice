export function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img style={{height:"400px"}} src="c1.jpg" class="d-block w-50 m-auto" alt="..." />
        </div>
        <div class="carousel-item">
          <img style={{height:"400px"}} src="c2.jpg" class="d-block w-50 m-auto" alt="..." />
        </div>
        <div class="carousel-item">
          <img style={{height:"400px"}} src="c3.jpg" class="d-block w-50 m-auto" alt="..." />
        </div>
        <div class="carousel-item">
          <img style={{height:"400px"}} src="c4.jpg" class="d-block w-50 m-auto" alt="..." />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor: "black"}}></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor: "black"}}></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
