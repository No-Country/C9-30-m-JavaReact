import { searchCampaigns} from "../js/search";
import { useEffect, useState, useRef } from "react";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Card, ProgressBar, Nav, Button } from "react-bootstrap";
import { BsSearch } from "react-icons/Bs";

export function useSearch() {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === "";
      return;
    }
    if (search === "") {
      setError("Este campo es requerido");
      return;
    }
    if (search.match(/^\d+$/)) {
      setError("No se puede mostrar ninguna campaña con un número");
      return;
    }
    if (search.length < 3) {
      setError("Ingresa mas datos, para poder mostrar una campaña");
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
const options = { dragFree: true, containScroll: "trimSnaps" };

function Searchs() {
  const [campanas, setCampanas] = useState([]);
  const { search, setSearch, error } = useSearch();


  const handledSubmit = (event) => {
    event.preventDefault();
  };

  const handledChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setSearch(event.target.value);
  };

  const resultsFilter = !search
    ? campanas
    : campanas.filter((dato) =>
        dato.shortDescription.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    async function run() {
      const campaignsSearch = await searchCampaigns();
      setCampanas(campaignsSearch);
    }
    run();
  }, []);

  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="search d-flex ">
      <div className="containerSearch">
        <h1>Descubre nuevos proyectos</h1>
        <h2>o explora por categoria</h2>
        <div className="containerButton d-flex justify-content-center mb-4 mt-5 gap-3">
          <Nav.Link href="">Productos</Nav.Link>
          <Nav.Link href="">Servicio</Nav.Link>
          <Nav.Link href="">Recientes</Nav.Link>
          <Nav.Link href="">Popularidad</Nav.Link>
          <Nav.Link href="">Aleatorio</Nav.Link> 
        </div>
        <div className="d-flex justify-content-center ">
          <form
            className="form d-flex mt-2 mb-4"
            onSubmit={handledSubmit}
            role="search"
          >
            <input
              onChange={handledChange}
              value={search}
              className="form-control me-2 "
              type="search"
              placeholder="Buscar proyecto"
              aria-label="Search"
            />
            <Button variant="" className="d-block iconStyle">
              <BsSearch />
            </Button>
          </form>
        </div>
        {error && (
          <p className="d-flex justify-content-center color:red ">{error}</p>
        )}

        <div>
          <h4 className="mt-4 mb-5"> Quizas te interese... </h4>

          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {resultsFilter.map((e, idx) => {
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
        </div>
      </div>
    </div>
  );
}

export default Searchs;
