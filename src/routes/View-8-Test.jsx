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
    marginLeft: 10,
    marginTop: 10,
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
    height: 120,
    padding: "5px 6px",
    borderRadius: 15,
  };

  return (
    <div className="">
      <div style={{ marginRight: 15 }}>
        <table style={styleCard}>
          <tbody>
            <tr>
              <td
                style={{
                  background: "none",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    marginTop: "10px",
                    paddingTop: "5px",
                  }}
                  src={logoGlass}
                  alt="gyacompany"
                  width={140}
                  height={140}
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
                    height: 100,
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
                  padding: "0px 24px 0px 24px",
                }}
              >
                <p
                  style={{
                    color: "rgb(235, 86, 86)",
                    margin: 1,
                  }}
                >
                  GLASS & ALUMINUM COMPANY S.A.C.
                </p>
                <p
                  style={{
                    fontSize: 18,
                    color: "rgb(42, 59, 71)",
                    margin: 0,
                  }}
                >
                  Juan Carlos Cueva Carrasco
                </p>
                <p
                  style={{
                    margin: 0,
                    color: "rgb(235, 86, 86))",
                  }}
                >
                  Gerente General
                </p>
                <p
                  style={{
                    fontSize: 12,
                    color: "rgb(235, 86, 86))",
                    margin: 0,
                  }}
                >
                  996-537-435
                </p>
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

/*    <div>
     <a
       href="https://gyacompany.com"
       style={{
         marginRight: 8,
       }}
     >
       <img src={url01} alt="" width="20" height="20" />
     </a>
     <a
       href="https://wwww.facebook.com/gyacompany"
       style={{
         marginRight: 8,
       }}
     >
       <img src={url02} alt="" width="20" height="20" />
     </a>
     <a
       href="https://wa.me/996537435"
       style={{
         marginRight: 8,
       }}
     >
       <img src={ulr03} alt="" width="20" height="20" />
     </a>
     <a
       href="https://www.instagram.com/gyacompany"
       style={{
         marginRight: 8,
       }}
     >
       <img src={ulr04} alt="" width="20" height="20" />
     </a>
     <a
       href="https://goo.gl/maps/ofXP2wqpy1h3G4E68"
       style={{
         marginRight: 8,
       }}
     >
       <img src={ulr05} alt="" width="20" height="20" />
     </a>
   </div>; */
