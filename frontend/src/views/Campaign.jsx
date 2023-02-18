import { useState, useEffect } from "react";
import { Card, ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getCampaignById } from "../petitions";
import { FaUserAlt } from "react-icons/fa";

const Campaign = () => {
  const [camData, setCamData] = useState([]);
  const [name, setName] = useState("");

  const location = useLocation();
  const id = location.pathname.slice(10);

  const rewards = [
    {
      id: 0,
      quantity: 1,
      image: "https://dummyimage.com/300x100/a3a3a3/fff.png&text=R1",
      name: "reward 1",
      price: 200,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quod reiciendis porro suscipit, ratione illum cum eius!",
      followers: 10,
    },
    {
      id: 1,
      quantity: 2,
      image: "https://dummyimage.com/300x100/a3a3a3/fff.png&text=R2",
      name: "reward 2",
      price: 200,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quod reiciendis porro suscipit, ratione illum cum eius!",
      followers: 20,
    },
    {
      id: 2,
      quantity: 1,
      image: "https://dummyimage.com/300x100/a3a3a3/fff.png&text=R3",
      name: "reward 3",
      price: 200,
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed quod reiciendis porro suscipit, ratione illum cum eius!",
      followers: 30,
    },
  ];

  useEffect(() => {
    async function run() {
      const campaignDetails = await getCampaignById(id);
      setCamData(campaignDetails);
      const { firstName, lastName } = campaignDetails.creator;
      setName(firstName + " " + lastName);
    }

    run();
  }, [id]);

  return (
    <div className="campaign">
      <div className="campaign-header d-block">
        <br />
        <br />
        <ProgressBar className="campaign-progress" now={80} />
        <h5 className="campaign-money mt-2 text-light">
          {camData.currentMoney}/{camData.goalMoney}
        </h5>
        <div className="campaign-header-title ">
          <h2 className="text-light">{camData.name}</h2>
          <p className="text-light">{camData.description}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8">
          <div className="campaign-info-container mt-3">
            <div className="owner-data">
              <img
                className="owner-image"
                src="https://dummyimage.com/25x25/a3a3a3/fff.png"
                alt="profile-picture"
              />{" "}
              <p
                className="campaign-subtitle "
                style={{ float: "right", marginLeft: "0.5rem" }}
              >
                Campaña de <br />
                <span className="campaign-text">{name}</span>
              </p>
            </div>

            <div className="campaign-category">
              <p className="campaign-subtitle">
                Categoria
                <br />
                <span className="campaign-text">Producto</span>
              </p>
            </div>
            <div className="campaign-followers">
              <p className="campaign-text">
                100{" "}
                <span className="campaign-subtitle">
                  Patrocinadores <br />
                  en el proyecto
                </span>
              </p>
            </div>
            <div className="campaign-time text-center">
              <span className="campaign-text">3</span>
              <br />
              <span className="campaign-subtitle">Dias</span>
            </div>
            <span className="campaign-subtitle text-center">
              Agregar a <br />
              favoritos
            </span>
          </div>
          <div className="campaign-details text-center">
            <div className="campaign-details-content">
              <h3 className="campaign-details-title">Sobre nuestro proyecto</h3>
              <p className="mb-4 campaign-details-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lore
              </p>
              <img
                src="https://dummyimage.com/300x200/a3a3a3/fff.png"
                alt="imagen"
              />
              <br />
              <br />
              <img
                src="https://dummyimage.com/300x200/a3a3a3/fff.png"
                alt="imagen"
              />
              <p className="mt-4 campaign-details-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lore
              </p>
            </div>
            <br />
          </div>
          <a className="campaign-security mt-3" href="#">
            Denunciar este proyecto
          </a>
        </div>
        <div className="col-md-3 ">
          {rewards.map((e, idx) => {
            return (
              <Card
                key={idx}
                className="campaign-rewards"
                style={{ borderBottom: "9px solid #009fe3" }}
              >
                <div
                  className="campaign-rewards-header"
                  style={{
                    backgroundImage: `url('${e.image}')`,
                  }}
                >
                  <h2 className="text-light campaign-rewards-title">
                    0{e.quantity}
                  </h2>
                </div>
                <Card.Body style={{ padding: "0.5rem" }}>
                  <Card.Title className="text-center">{e.name}</Card.Title>
                  <div style={{ fontSize: "xx-small" }}>
                    {e.text}
                    <div className="mt-2" style={{ float: "right" }}>
                      <span className="campaign-rewards-price">${e.price}</span>
                      <br />
                      <span className="campaign-rewards-followers mt-2">
                        {e.followers} &nbsp;
                        <FaUserAlt />
                      </span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>

      <div className="campaign-comments">
        <h4>Deja tu comentario:</h4>
        <div className="comments-box">comentarios...</div>
      </div>
    </div>
  );
};

export default Campaign;
