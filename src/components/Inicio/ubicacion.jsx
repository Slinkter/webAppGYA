import "./ubicacion.css";
export default function Ubicacion() {
  return (
    <section className="">
      <div class=" bg_ubicacion text-center ">
        <div class="container">
          <h2 class="titleh2">UBICANOS</h2>
          <p class="lead text-secondary"> Av. Los Frenos MZ H LT. 16 - La Molina</p>
        </div>
      </div>

      <div className="container text-center ">
        <div className="google-maps  ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1950.5647541756966!2d-76.94564577403024!3d-12.103285397846895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c714bd26b5ab%3A0xc27e03d844952799!2sVidrier%C3%ADa%20Chalo%20Reyes%20E.I.R.L.!5e0!3m2!1sen!2spe!4v1589082340015!5m2!1sen!2spe"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
      <div className="container m-5 text-center">
        
      </div>
    </section>
  );
}
