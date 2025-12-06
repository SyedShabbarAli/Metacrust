import CookieConsent from "react-cookie-consent";

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="userConsent"
      style={{
        background: "#d4f5ff",
        color: "#000000",
        justifyContent: "end",
        alignItems: "center",
        borderRadius: "10px",
        textAlign: "center",
        fontSize: "1.1rem",
      }}
      buttonStyle={{
        background: "rgb(34 211 238 / 0.9)",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "10px",
      }}
      declineButtonStyle={{
        background: "#f44336",
        color: "#fff",
        fontSize: "14px",
        borderRadius: "10px",
      }}
      expires={365}
    >
      This website uses cookies to enhance the user experience. No personal
      information is stored.
    </CookieConsent>
  );
}
