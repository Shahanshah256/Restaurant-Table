import React from "react";
import apiData from "../restApi.json";
import { useNavigate } from "react-router-dom";

function Menu() {
  const items = apiData.data[0].ourQualities;
  const navigate = useNavigate();
  const styles = {
    container: {
      padding: "60px 20px",
      textAlign: "center",
      background: "#f8f8f8",
    },
    heading: {
      fontSize: "36px",
      marginBottom: "40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
    },
    card: {
      background: "#fff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      transition: "0.3s",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
    },
    content: {
      padding: "15px",
    },
    btn: {
      marginTop: "10px",
      padding: "8px 15px",
      background: "#ff4d4d",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Our Menu 🍽️</h1>

      <div style={styles.grid}>
        {items.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />

            <div style={styles.content}>
              <h3>{item.name}</h3>
              <p>{item.designation}</p>

              <button
                style={styles.btn}
                onClick={() => {
                  navigate("/reservation");
                }}
              >
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
