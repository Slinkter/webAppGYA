import "./FooterWrapper.css";

export default function Footer() {
  return (
    <section>
      <footer class="footer  text-center">
        <div class="container">
          <div className="row">
            <div class="col-md-12">
              <ul class=" social-media ">
                <li>
                  <a href="">
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/themefisher">
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/themefisher">
                    <i class="fa-brands fa-tiktok"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/themefisher/">
                    <i class="fa-brands fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <p className="copyright-text">Lima - Peru</p>
            <p class="copyright-text">Copyright ©2022</p>
          </div>
        </div>
      </footer>
    </section>
  );
}
