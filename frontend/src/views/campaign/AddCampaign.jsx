import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ReactQuill from "react-quill";

import { addCampaigns, nextLayout, previousLayout } from "../../js/campaign";

const AddCampaign = () => {
  // const [campaignData, setCampaignData] = useState([]);
  const [checkData, setCheckData] = useState("");
  const [imageData, setImageData] = useState("");
  const [editorValue, setEditorValue] = useState("");

  const getInputData = (fieldset) => {
    const iptData = Array.from(
      fieldset.querySelectorAll("input:not([type=file]):not([type=radio])")
    );
    const formInputData = iptData.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, {});
    return formInputData;
  };
  const handlerChange = (e) => {
    setEditorValue(e);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const firstFieldsetData = document.querySelector("#msform #first");
    const lastFieldsetData = document.querySelector("#msform #last");

    const data = getInputData(firstFieldsetData);
    const rewardsData = getInputData(lastFieldsetData);
    rewardsData["image"] = imageData;

    const props = {
      longDescription: editorValue,
      image: imageData,
      category: checkData,
      donationTiers: rewardsData,
    };

    Object.assign(data, props);

    try {
      await addCampaigns(data);
    } catch (error) {
      // console.log(error);
    }
  };

  const handleCheck = (e) => {
    const { title } = e.target.nextElementSibling;
    setCheckData(title);
  };
  const handleFile = (e) => {
    setImageData(e.target.value);
  };

  useEffect(() => {
    nextLayout();
    previousLayout();
  }, []);

  return (
    <div>
      <Form id="msform" onSubmit={handleSubmit}>
        <ul id="progressbar">
          <li className="active"></li>
          <li></li>
          <li></li>
        </ul>

        <fieldset id="first">
          <h2 className="fs-title">Cargar campaña</h2>
          <h3 className="fs-subtitle">Aca empieza la aventura!!!</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Elegí un titulo para tu campaña</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ingresa un titulo llamativo"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripcion breve</Form.Label>
            <Form.Control
              type="text"
              name="shortDescription"
              placeholder="Breve descripción de la campaña"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Que tipo de servicio es?</Form.Label>
            <Form.Check
              type="radio"
              title="Producto"
              id="categoryProd"
              label="Producto"
              onClick={handleCheck}
            />
            <Form.Check
              type="radio"
              title="Servicio"
              id="categoryService"
              label="Servicio"
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>
              Imagen (Esta imagen se utilizara como banner)
            </Form.Label>
            <Form.Control name="image" type="file" onChange={handleFile} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Fecha Limite</Form.Label>
            <Form.Control type="date" name="goalMoney" />
            <Form.Label>Monto a recaudar</Form.Label>
            <Form.Control type="test" name="goalMoney" />
          </Form.Group>

          <Button type="button" name="next" className="next action-button">
            Next
          </Button>
        </fieldset>
        <fieldset id="second">
          <h2 className="fs-title">Contenido de la campaña</h2>
          <h3 className="fs-subtitle">
            En esta parte, pode explicar mas a tus futuros inversores sobre tu
            proyecto, porque lo haces, que beneficios va a traer. Recordá que es
            importante que te explayes y seas lo mas claro y sincero posible,
            porque de eso depende que tu campaña triunfe.
          </h3>
          <ReactQuill
            theme="snow"
            value={editorValue}
            onChange={handlerChange}
          />
          <Button
            type="button"
            name="previous"
            className="previous action-button"
          >
            Previous
          </Button>
          <Button type="button" name="next" className="next action-button">
            Next
          </Button>
        </fieldset>
        <fieldset id="last">
          <h2 className="fs-title">Cargar recompensas</h2>
          <h3 className="fs-subtitle">
            Es obligatorio cargar al menos 1 recompensa
          </h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Titulo de la recompensa</Form.Label>
            <Form.Control type="text" name="tierName" placeholder="Titulo" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Valor</Form.Label>
            <Form.Control type="text" name="price" placeholder="Valor" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Descripción breve de la recompensa</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder="Descripción"
            />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Subir imagen de la recompensa</Form.Label>
            <Form.Control name="image" type="file" onChange={handleFile} />
          </Form.Group>
          <Button
            type="button"
            name="previous"
            className="previous action-button"
          >
            Previous
          </Button>
          <Button type="submit" className="submit action-button">
            Submit
          </Button>
        </fieldset>
      </Form>
    </div>
  );
};

export default AddCampaign;
