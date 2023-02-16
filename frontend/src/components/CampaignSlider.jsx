import useEmblaCarousel from "embla-carousel-react";

const options = { dragFree: true, containScroll: "trimSnaps" };

const slides = [
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a1",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a2",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a3",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a4",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a5",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a6",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a7",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a8",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a9",
  },
  {
    image: "https://dummyimage.com/300x200/a3a3a3/fff.png&text=campa%C3%B1a10",
  },
];

const CampaignSlider = () => {
  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((e, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={e.image}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignSlider;
