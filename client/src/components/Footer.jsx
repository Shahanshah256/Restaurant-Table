import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  const styles = {
    footer: {
      background: "#111",
      color: "#fff",
      padding: "40px 20px",
    },

    container: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "30px",
    },

    column: {
      flex: "1",
      minWidth: "220px",
    },

    heading: {
      fontSize: "20px",
      marginBottom: "15px",
      color: "#ff4d4d",
    },

    text: {
      color: "#ccc",
      lineHeight: "1.6",
    },

    link: {
      display: "block",
      color: "#ccc",
      marginBottom: "8px",
      cursor: "pointer",
      transition: "0.3s",
    },

    iconRow: {
      display: "flex",
      gap: "15px",
      marginTop: "10px",
      fontSize: "18px",
      cursor: "pointer",
    },

    bottom: {
      textAlign: "center",
      marginTop: "30px",
      borderTop: "1px solid #333",
      paddingTop: "15px",
      color: "#aaa",
      fontSize: "14px",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* ABOUT */}
        <div style={styles.column}>
          <h3 style={styles.heading}>🍽️ Foodie</h3>
          <p style={styles.text}>
            Delicious food delivered with love. Experience the best taste from
            our kitchen.
          </p>
        </div>

        {/* LINKS */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Quick Links</h3>
          <span style={styles.link}>Home</span>
          <span style={styles.link}>Menu</span>
          <span style={styles.link}>About</span>
          <span style={styles.link}>Contact</span>
        </div>

        {/* CONTACT */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Contact</h3>
          <p style={styles.text}>
            <FaPhone /> +91 9695270061
          </p>
          <p style={styles.text}>
            <FaEnvelope /> support@foodie.com
          </p>
        </div>

        {/* SOCIAL */}
        <div style={styles.column}>
          <h3 style={styles.heading}>Follow Us</h3>
          <div style={styles.iconRow}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div style={styles.bottom}>© 2026 Foodie | All Rights Reserved</div>
    </footer>
  );
}

export default Footer;
