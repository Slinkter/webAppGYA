import fb from "../bonus/ic_fb.png";
import ig from "../bonus/ic_instagram.png";
import ws from "../bonus/ic_whatsapp.png";
import global from "../bonus/ic_website.png";
import location from "../bonus/ic_location.png";
import "../bonus/Firma.css";

export default function TestPage() {
  const styleCard = {
    boxShadow: "-4px 0px 18px 6px rgba(0,0,0,0.11)",
    boxSizing: "border-box",
    textIndent: 0,
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 0,
    tableLayout: "auto",
    borderCollapse: "initial",
    background: "rgb(255, 255, 255) none repeat scroll 0% 0%",
    minWidth: "auto",
    width: "max-content",
    color: "rgb(104, 119, 130)",
    fontStyle: "normal",
    fontVariantLigatures: "normal",
    fontVariantCaps: "normal",
    fontWeight: 400,
    letterSpacing: "normal",
    textAlign: "center",
    textTransform: "none",
    whiteSpace: "normal",
    wordSpacing: 0,
    textDecorationThickness: "initial",
    textDecorationStyle: "initial",
    textDecorationColor: "initial",
    fontFamily: "arial",
    height: 170,
    padding: "16px 18px",
    borderRadius: 15,
  };

  const urlIconLogo =
    "https://gyacompany.com/static/media/logovcr.8a738518d0998756db65.png";

  return (
    <div className="font-firma ">
      <div style={{ marginleft: 10 }}>
        <table style={styleCard}>
          <tbody>
            <tr style={{ border: "none" }}>
              <td
                style={{
                  padding: "0px 4px 0px 0px",
                  background: "none",
                }}
              >
                <a
                  href="/"
                  className="font-firma "
                  style={{
                    padding: "0px 4px 0px 0px",
                    background: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={urlIconLogo}
                    alt="gyacompany"
                    style={{
                      display: "block",
                      marginRight: 7,
                      float: "left",
                      marginTop: -15,
                    }}
                    width={85}
                    height={85}
                  />
                  <p
                    style={{
                      marginTop: -20,
                      fontSize: 16,
                      color: "rgb(230, 76, 96)",
                      height: 18,
                      display: "block",
                    }}
                  >
                    Glass & Aluminum <br />
                    <span>Company S.A.C.</span>
                  </p>
                </a>
              </td>

              <td
                style={{
                  border: "0px solid rgb(229, 231, 235)",
                  boxSizing: "border-box",
                  minWidth: "auto",
                  padding: 0,
                }}
              >
                <div
                  className="gmail-color-signature"
                  style={{
                    border: "1px solid rgb(235, 86, 86)",
                    boxSizing: "border-box",
                    width: 4,
                    height: 120,
                    borderRadius: 50,
                    cursor: "pointer",
                    backgroundColor: "rgb(235, 86, 86)",
                  }}
                />
              </td>
              <td
                className="font-firma "
                style={{
                  textAlign: "center",
                  background: "none",
                  padding: "0px 14px 0px 24px",
                  margin: 150,
                }}
              >
                <p
                  style={{
                    fontSize: 20,
                    color: "rgb(42, 59, 71)",
                    height: 20,
                    display: "block",
                  }}
                >
                  Juan Carlos Cueva Carrasco
                </p>
                <p
                  style={{
                    fontSize: 14,
                    margin: "0px 0px 8px",
                  }}
                >
                  <span
                    style={{
                      color: "rgb(105, 116, 119)",
                      margin: 0,
                    }}
                  >
                    Gerente General
                  </span>
                </p>
                <div>
                  <a
                    href="https://instagram.com/gyacompany"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{
                      marginRight: 8,
                      display: "inline-block",
                    }}
                  >
                    <img src={global} alt="" />
                  </a>

                  <a
                    href="https://facebook.com/gyacompany"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{
                      marginRight: 8,
                      display: "inline-block",
                    }}
                  >
                    <img src={fb} alt="" />
                  </a>
                  <a
                    href="https://wa.me/996537435"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{
                      marginRight: 8,
                      display: "inline-block",
                    }}
                  >
                    <img src={ws} alt="" />
                  </a>
                  <a
                    href="https://instagram.com/gyacompany"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{
                      marginRight: 8,
                      display: "inline-block",
                    }}
                  >
                    <img src={ig} alt="" />
                  </a>

                  <a
                    href="https://instagram.com/gyacompany"
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    style={{
                      marginRight: 8,
                      display: "inline-block",
                    }}
                  >
                    <img src={location} alt="" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
