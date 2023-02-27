//jQuery time
document.addEventListener("DOMContentLoaded", function () {
  let current_fs, next_fs, previous_fs; //fieldsets
  let opacity, scale; //fieldset properties which we will animate
  let animating; //flag to prevent quick multi-click glitches

  const nextBtns = document.querySelectorAll(".next");
  nextBtns.forEach(function (button) {
    button.addEventListener("click", function () {
      if (animating) return false;
      animating = true;

      current_fs = this.parentElement;
      next_fs = this.parentElement.nextElementSibling;

      //activate next step on progressbar using the index of next_fs

      const progressLi = Array.from(
        document.querySelectorAll("#progressbar li")
      );
      const fieldset = Array.from(document.querySelectorAll("fieldset"));
      progressLi[fieldset.indexOf(next_fs)].classList.add("active");

      //show the next fieldset
      next_fs.style.display = "block";

      //hide the current fieldset with style
      let duration = 800;
      let startTime = null;
      function step(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = currentTime - startTime;
        opacity = 1 - progress / duration;
        scale = 1 - (1 - opacity) * 0.2;

        current_fs.style.opacity = opacity;
        current_fs.style.transform = "scale(" + scale + ")";

        next_fs.style.opacity = 1 - opacity;

        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          current_fs.style.display = "none";
          animating = false;
        }
      }
      window.requestAnimationFrame(step);
    });
  });

  const previousBtns = document.querySelectorAll(".previous");
  previousBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (animating) return false;
      animating = true;

      const current_fs = this.parentElement;
      const previous_fs = this.parentElement.previousElementSibling;

      // de-activate current step on progressbar
      const progressLi = Array.from(
        document.querySelectorAll("#progressbar li")
      );
      const fieldset = Array.from(document.querySelectorAll("fieldset"));
      progressLi[fieldset.indexOf(current_fs)].classList.remove("active");

      // show the previous fieldset
      previous_fs.style.display = "block";
      // hide the current fieldset with style
      const start = performance.now();
      const duration = 300;

      function update(currentTime) {
        const elapsed = currentTime - start;
        const progress = elapsed / duration;
        // const opacity = 1 - progress;
        // const scale = 0.8 + (1 - progress) * 0.2;

        if (progress > 1) {
          current_fs.style.display = "none";
          animating = false;
          return;
        }

        previous_fs.style.transform = `none`;
        previous_fs.style.opacity = "unset";
        window.requestAnimationFrame(update);
      }

      window.requestAnimationFrame(update);
    });
  });
});

const AddCampaign = () => {
  return (
    <div>
      <form id="msform">
        <ul id="progressbar">
          <li className="active">Account Setup</li>
          <li>Social Profiles</li>
          <li>Personal Details</li>
        </ul>

        <fieldset>
          <h2 className="fs-title">Cargar campaña</h2>
          {/* <h3 className="fs-subtitle">This is step 1</h3> */}
          <label htmlFor="title">Elegi un titulo para tu campaña</label>
          <input
            type="text"
            name="title"
            placeholder="Ingresa un titulo llamativo"
          />
          <label htmlFor="shortDescription">Subtitulo</label>
          <input
            type="password"
            name="shortDescription"
            placeholder="Breve descripción de la campaña"
          />
          <label htmlFor="endDate">Fecha limite</label>
          <input type="date" name="endDate" placeholder="Confirm Password" />
          <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
          />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Contenido de la campaña</h2>
          <h3 className="fs-subtitle">
            En esta parte, pode explicar mas a tus futuros inversores sobre tu
            proyecto, porque lo haces, que beneficios va a traer. Recordá que es
            importante que te explayes y seas lo mas claro y sincero posible,
            porque de eso depende que tu campaña triunfe.
          </h3>
          <input type="text" name="twitter" placeholder="Twitter" />
          <input type="text" name="facebook" placeholder="Facebook" />
          <input type="text" name="gplus" placeholder="Google Plus" />
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
          />
          <input
            type="button"
            name="next"
            className="next action-button"
            value="Next"
          />
        </fieldset>
        <fieldset>
          <h2 className="fs-title">Cargar recompensas</h2>
          <h3 className="fs-subtitle">We will never sell it</h3>
          <input type="text" name="fname" placeholder="Titulo" />
          <input type="text" name="lname" placeholder="Subtitulo" />
          <input type="text" name="phone" placeholder="descripcion" />
          <textarea name="address" placeholder="imagen"></textarea>
          <input
            type="button"
            name="previous"
            className="previous action-button"
            value="Previous"
          />
          <a href="" className="submit action-button" target="_top">
            Submit
          </a>
        </fieldset>
      </form>
    </div>
  );
};

export default AddCampaign;
