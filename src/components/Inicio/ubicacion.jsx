import "./ubicacion.css";
export default function Ubicacion() {
  return (
    <section className="text-center">
      <div class=" bg_ubicacion text-center ">
        <div class="container">
          <h2 class="ubicacion-title-h2">UBICANOS</h2>
          <p class="lead text-secondary">
            AV. Los Fresnos MZ H LT 16 - Urb. El Valle - La Molina - Lima{" "}
          </p>
        </div>
      </div>
      <div className="container-fluid text-center ">
        <div className="google-maps  shadow-lg  rounded mb-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7802.259991971398!2d-76.94203500000003!3d-12.103251999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c714bd26b5ab%3A0xc27e03d844952799!2sGlass%20%26%20Aluminum%20Company!5e0!3m2!1sen!2spe!4v1704232992639!5m2!1sen!2spe"
            width={800}
            height={600}
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <br />
      <button className="col-12 btn btn-dark col-md-5 mt-2 mb-5 " type="button">
        <a href="https://maps.app.goo.gl/qDk3gpzd5MrYc6zk6">Visitar</a>
      </button>
      <br />
    </section>
  );
}
