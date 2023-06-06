import React from "react";
import fb from "../img/firma/ic_fb.png";
import ig from "../img/firma/ic_instagram.png";
import ws from "../img/firma/ic_whatsapp.png";
import global from "../img/firma/ic_web.png";
import location from "../img/firma/ic_location.png";
//
import logoGlass from "../img/LogoCompanytrans.png";
//
import "../bonus/Firma.css";

const TestPage = () => {
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

  return (
    <div className="">
      <div style={{ marginLeft: 15, marginRight: 15 }}>
        <table style={styleCard}>
          <tbody>
            <tr>
              <td
                className="font-firma"
                style={{
                  padding: "10px 14px 0px 10px",
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={logoGlass}
                  alt="gyacompany"
                  width={150}
                  height={150}
                />
              </td>
              {/* barra rojas  */}
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
              {/* nombre  */}
              <td
                className="font-firma"
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
                    href="https://www.gyacompany.com"
                    style={{
                      marginRight: 8,
                    }}
                  >
                    <img src={global} alt="" width="20" height="20" />
                  </a>
                  <a
                    href="https://wwww.facebook.com/gyacompany"
                    style={{
                      marginRight: 8,
                    }}
                  >
                    <img src={fb} alt="" width="20" height="20" />
                  </a>
                  <a
                    href="https://www.wa.me/996537435"
                    style={{
                      marginRight: 8,
                    }}
                  >
                    <img src={ws} alt="" width="20" height="20" />
                  </a>
                  <a
                    href="https://www.instagram.com/gyacompany"
                    style={{
                      marginRight: 8,
                    }}
                  >
                    <img src={ig} alt="" width="20" height="20" />
                  </a>
                  <a
                    href="https://goo.gl/maps/ofXP2wqpy1h3G4E68"
                    style={{
                      marginRight: 8,
                    }}
                  >
                    <img src={location} alt="" width="20" height="20" />
                  </a>
                </div>
              </td>
              {/*  */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestPage;
