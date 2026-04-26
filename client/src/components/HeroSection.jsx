import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function HeroSection() {
  const styles = {
    hero: {
      height: "90vh",
      backgroundImage:
        "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },
    overlay: {
      height: "100%",
      width: "100%",
      backgroundColor: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      color: "#fff",
    },
    content: {
      maxWidth: "700px",
      padding: "20px",
    },
    title: {
      fontSize: "48px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    subtitle: {
      fontSize: "18px",
      marginBottom: "30px",
    },
    buttons: {
      display: "flex",
      gap: "15px",
      justifyContent: "center",
    },
    primaryBtn: {
      padding: "12px 25px",
      backgroundColor: "#ff4d4d",
      border: "none",
      color: "#fff",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
    },
    secondaryBtn: {
      padding: "12px 25px",
      backgroundColor: "transparent",
      border: "2px solid #fff",
      color: "#fff",
      fontSize: "16px",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.content}>
            <h1 style={styles.title}>Delicious Food, Delivered To You 🍔</h1>
            <p style={styles.subtitle}>
              Order your favorite meals anytime, anywhere. Fresh, fast & tasty!
            </p>

            <div style={styles.buttons}>
              <button style={styles.primaryBtn}>Order Now</button>
              <button style={styles.secondaryBtn}>View Menu</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
