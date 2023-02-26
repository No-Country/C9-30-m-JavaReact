import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useRef } from "react";
import { Card, ProgressBar, Nav } from "react-bootstrap";

import { getCampaignNewest} from "../../js/search";

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

function SearchNewst() {
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
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
      );


  useEffect(() => {
    async function run() {
      const campaignsNewest = await getCampaignNewest();
      setCampanas(campaignsNewest);
    }
    run();
  }, []);

  const [emblaRef] = useEmblaCarousel(options);
  return (
    <div className="search d-flex ">
      <div className="containerSearch">
        <h1>Descubre nuevos proyectos</h1>
        <h2>o explora por categoria</h2>
        <div className="containerButton d-flex justify-content-center mb-4 mt-5 gap-3 " >
          <Nav.Link href="/buscar/productos">Productos</Nav.Link>
          <Nav.Link href="/buscar/servicios">Servicios</Nav.Link>
          <Nav.Link href="/buscar/recientes">Recientes</Nav.Link>
          <Nav.Link href="/buscar/populares">Popularidad</Nav.Link>
          <Nav.Link href="/buscar/aleatorios">Aleatorio</Nav.Link>
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
            <button type="submit">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#009FE3"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.3158 4C10.2754 4 7 7.27539 7 11.3158C7 15.3562 10.2754 18.6316 14.3158 18.6316C15.975 18.6316 17.5063 18.0783 18.7334 17.1476L21.8358 20.25C22.2263 20.6405 22.8595 20.6405 23.25 20.25C23.6405 19.8595 23.6405 19.2263 23.25 18.8358L20.1476 15.7334C21.0783 14.5063 21.6316 12.975 21.6316 11.3158C21.6316 7.27539 18.3562 4 14.3158 4ZM9 11.3158C9 8.37996 11.38 6 14.3158 6C17.2516 6 19.6316 8.37996 19.6316 11.3158C19.6316 12.784 19.0377 14.1116 18.0746 15.0746C17.1116 16.0377 15.784 16.6316 14.3158 16.6316C11.38 16.6316 9 14.2516 9 11.3158Z"
                  fill="#009FE3"
                />
                <path
                  d="M0 16.5C0 15.9477 0.447715 15.5 1 15.5H5C5.55229 15.5 6 15.9477 6 16.5C6 17.0523 5.55229 17.5 5 17.5H1C0.447715 17.5 0 17.0523 0 16.5Z"
                  fill="#009FE3"
                />
                <path
                  d="M0 11.5C0 10.9477 0.447715 10.5 1 10.5H4C4.55229 10.5 5 10.9477 5 11.5C5 12.0523 4.55229 12.5 4 12.5H1C0.447715 12.5 0 12.0523 0 11.5Z"
                  fill="#009FE3"
                />
                <path
                  d="M0 6.5C0 5.94772 0.447715 5.5 1 5.5H5C5.55229 5.5 6 5.94772 6 6.5C6 7.05229 5.55229 7.5 5 7.5H1C0.447715 7.5 0 7.05229 0 6.5Z"
                  fill="#009FE3"
                />
              </svg>
            </button>
          </form>
        </div>
        {error && (
          <p className="d-flex justify-content-center color:red ">{error}</p>
        )}
        <h4 className="mt-4 mb-5"> Recientes </h4>

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
  );
}

export default SearchNewst;
