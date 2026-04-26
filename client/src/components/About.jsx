import React from "react";
import Navbar from "./Navbar";

function About() {
  const styles = {
    container: {
      display: "flex",
      flexWrap: "wrap",
      padding: "50px",
      alignItems: "center",
      justifyContent: "center",
      gap: "40px",
    },
    imageSection: {
      flex: "1",
      minWidth: "300px",
    },
    image: {
      width: "100%",
      borderRadius: "15px",
      boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
    },
    content: {
      flex: "1",
      minWidth: "300px",
    },
    title: {
      fontSize: "36px",
      marginBottom: "20px",
    },
    text: {
      fontSize: "16px",
      marginBottom: "15px",
      color: "#555",
    },
    stats: {
      display: "flex",
      gap: "30px",
      margin: "20px 0",
    },
    btn: {
      padding: "12px 25px",
      backgroundColor: "#ff4d4d",
      border: "none",
      color: "#fff",
      borderRadius: "6px",
      cursor: "pointer",
    },
  };
  return (
    <>
      <section style={styles.container}>
        {/* Left Image */}
        <div style={styles.imageSection}>
          <img
            src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg"
            alt="restaurant"
            style={styles.image}
          />
        </div>

        {/* Right Content */}
        <div style={styles.content}>
          <h1 style={styles.title}>About Our Restaurant 🍴</h1>

          <p style={styles.text}>
            Welcome to Foodie! We serve delicious, fresh, and high-quality meals
            made with love. Our mission is to provide a delightful dining
            experience with fast delivery and amazing taste.
          </p>

          <p style={styles.text}>
            From traditional Indian dishes to international cuisines, we bring
            flavors from around the world to your plate.
          </p>

          <div style={styles.stats}>
            <div>
              <h2>10K+</h2>
              <p>Happy Customers</p>
            </div>
            <div>
              <h2>50+</h2>
              <p>Food Items</p>
            </div>
            <div>
              <h2>5⭐</h2>
              <p>Ratings</p>
            </div>
          </div>

          <button style={styles.btn}>Explore Menu</button>
        </div>
      </section>
    </>
  );
}

export default About;
