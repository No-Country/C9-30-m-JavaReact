import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { getCampaignPopulars } from "../../js/search";

const options = { dragFree: true, containScroll: "trimSnaps" };

const CampaignPopulars = () => {
  const [slidesPopulars, setSlidesPopulars] = useState([]);


  useEffect(() => {
    async function run() {
      const campaignsPopulars = await getCampaignPopulars();

      setSlidesPopulars(campaignsPopulars);
    }
    run();
  }, []);

  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slidesPopulars.map((e, idx) => {
            return (
              <div className="embla__slide" key={idx}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={e.logoUrl}
                    width={286}
                    height={162}
                  />
                  <ProgressBar
                    className="campaign-progress"
                    now={(e.currentMoney * 100) / e.goalMoney}
                  />
                  <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                    <Card.Text>{e.shortDescription}</Card.Text>
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

export default CampaignPopulars;
