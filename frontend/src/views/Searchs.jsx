import { useFavorite } from "../context/FavoriteContext";
import { useEffect, useState, useRef } from "react";
import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export function useSearch() {
  const [campanas, setCampanas]= useState([]);
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

  return { search, setSearch, error, campanas, setCampanas };
}

function Searchs() {
  const { favorites } = useFavorite();
  const { search, setSearch, error, campanas, setCampanas } = useSearch();

  const handledSubmit = (event) => {
    event.preventDefault();
  };

  const handledChange = (event) => {
    const newQuery = event.target.value;
    if (newQuery.startsWith(" ")) return;
    setSearch(event.target.value);
    console.log(filterSearch(event.target.value));
  };


  const filterSearch=(finishSearch)=>{
    const responseSearch = favorites.filter((element)=>{
      if(element.name.toString().toLowerCase().includes(finishSearch.toLowerCase())
      ){
        return element;
      } 
    });
    setSearch(responseSearch);
  }
      
  return (
    <div className="search d-flex ">
      <div className="containerSearch">
        <h1>Descubre nuevos proyectos</h1>
        <h2>o explora por categoria</h2>
        <div className="containerButton d-flex justify-content-center mb-4 mt-5">
          <button>Producto</button>
          <button>Servicio</button>
          <button>Recientes</button>
          <button>Popularidad</button>
          <button>Aleatorio</button>
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
        {error && <p className="d-flex justify-content-center color:red ">{error}</p>}

        <div>
          <h4 className="mt-4 mb-5"> Aleatorios</h4>

          <Card style={{ width: "30%" }}>
            <Card.Img
              className="d-block w-100"
              src="https://dummyimage.com/500x200/a3a3a3/fff.png&text=image1"
              alt="Imagen 1"
            />
            <Card.Body>
              <Card.Title>{favorites.proyectname} </Card.Title>
              <Card.Subtitle> {favorites.pymesname} </Card.Subtitle>
              <Card.Text>
                {favorites.containertext} {favorites.money}
              </Card.Text>
              <Button variant="secondary">
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="black"
                   >
                  <path
                    d="M20 9l-1.995 11.346A2 2 0 0116.035 22h-8.07a2 2 0 01-1.97-1.654L4 9M21 6h-5.625M3 6h5.625m0 0V4a2 2 0 012-2h2.75a2 2 0 012 2v2m-6.75 0h6.75"
                    stroke="black"
                  ></path>
                </svg>
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Searchs;
