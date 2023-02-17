import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getCampaignById } from "../petitions";

const Campaign = () => {
  const [camData, setCamData] = useState([]);
  const [name, setName] = useState("");

  const location = useLocation();
  const id = location.pathname.slice(10);

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
      <div className="campaign-header">
        <br />
        <br />
        <ProgressBar className="campaign-progress" now={80} />
        <h5 className="campaign-money mt-2">
          {camData.currentMoney}/{camData.goalMoney}
        </h5>
        <div className="campaign-header-title ">
          <h2 className="text-light">{camData.name}</h2>
          <p className="text-light">{camData.description}</p>
        </div>
      </div>
      <div className="campaign-info-container">
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

      <div className="campaign-details">
        <h3 className="campaign-details-title">Sobre nuestro proyecto</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sit,
          sapiente tempore nemo totam quisquam veritatis quod temporibus
          exercitationem? Quo voluptates suscipit hic, vel pariatur dolorem ut?
          Quae, excepturi culpa!
        </p>
        <img src="" alt="imagen" />
        <br />
        <img src="" alt="imagen" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          distinctio quia voluptatibus excepturi aliquam unde voluptates,
          eligendi reprehenderit laboriosam impedit nam eveniet at quisquam eum
          soluta sunt. Veniam, amet? Eaque.
        </p>
      </div>
      <a href="#">Denunciar este proyecto</a>
      <div className="campaign-comments">
        <h4>Deja tu comentario:</h4>
        <div className="comments-box">comentarios...</div>
      </div>
    </div>
  );
};

export default Campaign;
