import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import CampaignSlider from "../components/CampaignSlider";
import { getCampaigns } from "../petitions";

const Home = () => {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    async function run() {
      const homeCampaigns = await getCampaigns();
      const slider = homeCampaigns.slice(1);
      setSliderData(slider);
    }

    run();
  }, []);

  return (
    <>
      <Carousel controls={true} indicators={false}>
        {sliderData.map((sl, idx) => {
          return (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={sl.imgUrl}
                alt="Imagen 1"
                width={800}
                height={400}
              />
              <Carousel.Caption>
                <h3>{sl.name}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
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
