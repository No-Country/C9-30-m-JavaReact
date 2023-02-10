import { Carousel } from "react-bootstrap";
import CampaignSlider from "../components/CampaignSlider";

const Home = () => {
  return (
    <>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dummyimage.com/500x200/a3a3a3/fff.png&text=image1"
            alt="Imagen 1"
          />
          <Carousel.Caption>
            <h3>Campaña 1</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dummyimage.com/500x200/a3a3a3/fff.png&text=image2"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Campaña 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://dummyimage.com/500x200/a3a3a3/fff.png&text=image3"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Campaña 3</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <hr />
      <h3>Mas recientes</h3>
      <CampaignSlider />
      <br />
      <h3>Mas Populares</h3>
      <CampaignSlider />
      <br />
    </>
  );
};

export default Home;
