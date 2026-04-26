import React from "react";

function WhoAreYou() {
  const styles = {
    container: {
      padding: "60px 20px",
      textAlign: "center",
      background: "#f9f9f9",
    },
    heading: {
      fontSize: "36px",
      marginBottom: "40px",
    },
    wrapper: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "40px",
    },
    side: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      maxWidth: "250px",
    },
    box: {
      background: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "250px",
      height: "250px",
      borderRadius: "50%", // 🔥 circle image
      objectFit: "cover",
      border: "5px solid #ff4d4d",
      boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
    },
  };
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Who We Are</h1>

      <div style={styles.wrapper}>
        {/* Left Side */}
        <div style={styles.side}>
          <div style={styles.box}>
            <h3>10+ Years Experience</h3>
            <p>Serving delicious food with passion.</p>
          </div>

          <div style={styles.box}>
            <h3>Fresh Ingredients</h3>
            <p>We use only high-quality fresh items.</p>
          </div>
        </div>

        {/* Center Image */}
        <div style={styles.center}>
          <img
            src="https://images.pexels.com/photos/3184192/pexels-photo-3184192.jpeg"
            alt="team"
            style={styles.image}
          />
        </div>

        {/* Right Side */}
        <div style={styles.side}>
          <div style={styles.box}>
            <h3>Trusted by 10K+</h3>
            <p>Customers love our taste and service.</p>
          </div>

          <div style={styles.box}>
            <h3>Fast Delivery</h3>
            <p>Quick and reliable delivery service.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoAreYou;
