import React from "react";
import { teamData } from "../teamData";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Team() {
  const styles = {
    container: {
      padding: "70px 20px",
      textAlign: "center",
      background: "linear-gradient(to right, #fff5f5, #f9f9f9)",
    },
    heading: {
      fontSize: "38px",
      marginBottom: "10px",
    },
    subHeading: {
      color: "#777",
      marginBottom: "40px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "30px",
    },
    card: {
      background: "#fff",
      padding: "25px",
      borderRadius: "15px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: "0.3s",
      cursor: "pointer",
    },

    imageWrapper: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "15px",
    },

    image: {
      width: "120px",
      height: "120px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "4px solid #ff4d4d",
    },

    name: {
      fontSize: "18px",
      marginBottom: "5px",
    },

    role: {
      color: "#888",
      marginBottom: "15px",
    },

    icons: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
    },

    icon: {
      fontSize: "18px",
      color: "#ff4d4d",
      cursor: "pointer",
    },
  };
  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Meet Our Team 👨‍🍳</h1>
      <p style={styles.subHeading}>
        Passionate people behind your favorite food
      </p>

      <div style={styles.grid}>
        {teamData.map((member) => (
          <div key={member.id} style={styles.card}>
            {/* Image */}
            <div style={styles.imageWrapper}>
              <img src={member.image} alt={member.name} style={styles.image} />
            </div>

            {/* Content */}
            <h3 style={styles.name}>{member.name}</h3>
            <p style={styles.role}>{member.role}</p>

            {/* Social Icons */}
            <div style={styles.icons}>
              <FaInstagram style={styles.icon} />
              <FaLinkedin style={styles.icon} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
