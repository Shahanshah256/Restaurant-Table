import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/"); // 👈 home page
    }, 5000); // 5 seconds

    return () => clearTimeout(timer); // cleanup
  }, [navigate]);

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "#f5f5f5",
    },
    text: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "green",
    },
    subText: {
      color: "#555",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.text}>🎉 Reservation Successful!</h1>
      <p style={styles.subText}>
        You will be redirected to home page in 5 seconds...
      </p>
    </div>
  );
}

export default Success;
