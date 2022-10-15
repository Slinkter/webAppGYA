import logoGYA from "../img/logovcr.png";
import fb from "../bonus/ic_fb.png";
import ig from "../bonus/ic_instagram.png";
import ws from "../bonus/ic_whatsapp.png";

export default function TestPage() {
    return (
        <div>
            <div style={{ marginleft: 10 }}>
               
                <table
                    style={{
                        boxShadow: "-4px 0px 18px 6px rgba(0,0,0,0.31)",
                        boxSizing: "border-box",
                        textIndent: 0,
                        marginLeft:15,
                        marginTop: 15,
                        marginBottom: 0,
                        tableLayout: "auto",
                        borderCollapse: "initial",
                        background:
                            "rgb(255, 255, 255) none repeat scroll 0% 0%",
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
                    }}
                >
                    <tbody>
                        <tr style={{ border: "none" }}>
                            <td
                                style={{
                                    padding: "0px 4px 0px 0px",
                                    background: "none",
                                }}
                            >
                                <a href="/">
                                    <img
                                        src="https://gyacompany.com/static/media/logovcr.8a738518d0998756db65.png"
                                        alt="gyacompany"
                                        style={{
                                            border: "1px solid rgb(230, 76, 96)",
                                            borderRadius: 50,
                                            display: "block",
                                            marginRight: 7,
                                            float: "left",
                                        }}
                                        jslog="138226; u014N:xr6bB; 53:W3RydWUsMV0."
                                        width={89}
                                        height={89}
                                    />
                                </a>
                            </td>
                            <td
                                style={{
                                    textAlign: "left",
                                    background: "none",
                                    padding: "0px 14px 0px 3px",
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
                                    Juan Carlos Cueva
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
                                <div id="sociales">
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
                                </div>
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
                                        height: 95,
                                        borderRadius: 50,
                                        marginTop: 20,
                                        marginRight: 0,
                                        cursor: "pointer",
                                        backgroundColor: "rgb(235, 86, 86)",
                                    }}
                                />
                                <br />
                            </td>
                            <td
                                style={{
                                    background: "none",
                                    padding: "10px 0px 7px 14px",
                                }}
                            >
                                <span
                                    style={{
                                        marginBottom: 4,
                                        fontSize: 14,
                                        color: "rgb(105, 116, 119)",

                                        height: 24,
                                        display: "block",
                                        textAlign: "left",
                                    }}
                                >
                                    <img
                                        src="https://ed.team/static/images/utils/firma/theme/url-red.png"
                                        alt=""
                                        style={{
                                            marginTop: 3,
                                            float: "left",
                                            marginRight: 7,
                                            borderRadius: "50%",
                                            display: "block",
                                        }}
                                        width={20}
                                        height={20}
                                    />
                                    <a href="https://gyacompany.com/">
                                        gyacompany.com
                                    </a>
                                </span>
                                <span
                                    style={{
                                        marginBottom: 4,
                                        fontSize: 14,
                                        color: "rgb(105, 116, 119)",

                                        height: 24,
                                        display: "block",
                                        textAlign: "left",
                                    }}
                                >
                                    <img
                                        src="https://ed.team/static/images/utils/firma/theme/phone-red.png"
                                        alt=""
                                        style={{
                                            marginTop: 3,
                                            float: "left",
                                            marginRight: 7,
                                            borderRadius: "50%",
                                            display: "block",
                                        }}
                                        width={20}
                                        height={20}
                                    />
                                    +51 996 537 435
                                </span>
                                <span
                                    style={{
                                        marginBottom: 4,
                                        fontSize: 14,
                                        color: "rgb(105, 116, 119)",

                                        height: 24,
                                        display: "block",
                                        textAlign: "left",
                                    }}
                                >
                                    <img
                                        src="https://ed.team/static/images/utils/firma/theme/pin-red.png"
                                        alt=""
                                        style={{
                                            marginTop: 3,
                                            float: "left",
                                            marginRight: 7,
                                            borderRadius: "50%",
                                            display: "block",
                                        }}
                                        width={20}
                                        height={20}
                                    />
                                    Lima,Peru
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}