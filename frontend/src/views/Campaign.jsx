import { useState, useEffect } from "react";
import { ProgressBar } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { getCampaignById } from "../petitions";

const Campaign = () => {
  const [camData, setCamData] = useState([]);

  const location = useLocation();
  const id = location.pathname.slice(10);

  useEffect(() => {
    async function run() {
      const campaignDetails = await getCampaignById(id);
      console.log(campaignDetails);
      setCamData(campaignDetails);
    }

    run();
  }, [id]);

  return (
    <div>
      <div
        class="jumbotron"
        style={{
          backgroundImage:
            "url('https://dummyimage.com/500x200/a3a3a3/fff.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          height: "100vh",
        }}
      >
        <ProgressBar now={80} />
        <h6>
          {camData.currentMoney}/{camData.goalMoney}
        </h6>
        <h2>{camData.name}</h2>
        <p>{camData.description}</p>
      </div>
    </div>
  );
};

export default Campaign;
