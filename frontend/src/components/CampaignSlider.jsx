import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";

import { getCampaigns } from "../petitions";

const options = { dragFree: true, containScroll: "trimSnaps" };

const CampaignSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    async function run() {
      const campaigns = await getCampaigns();

      setSlides(campaigns);
    }
    run();
  }, []);

  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((e, idx) => {
            return (
              <div className="embla__slide" key={idx}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={`https://dummyimage.com/286x180/a3a3a3/fff.png&text=campaña`}
                  />
                  <ProgressBar className="campaign-progress" now={90} />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <p>
                      ${e.currentMoney} / {e.goalMoney}
                    </p>

                    <a href={`/campania/${e.campaignId}`}>ver mas</a>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CampaignSlider;
