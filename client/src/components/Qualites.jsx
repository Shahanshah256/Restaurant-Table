//

import React from "react";
import data from "../restApi.json";

function Qualites() {
  const styles = {
    container: {
      padding: "50px 20px",
      textAlign: "center",
    },
    heading: {
      fontSize: "30px",
      marginBottom: "30px",
    },
    grid: {
      display: "flex",
      gap: "20px",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    card: {
      width: "250px",
      background: "#fff",
      borderRadius: "10px",
      padding: "15px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
    image: {
      width: "100%",
      height: "150px",
      objectFit: "cover",
      borderRadius: "8px",
      marginBottom: "10px",
      display: "block", // 👈 add this
    },
  };

  // ✅ correct path
  const items = data.data[0].ourQualities.slice(0, 3);
  console.log(items);

  return (
    <section style={styles.container}>
      <h1 style={styles.heading}>Our Special Items</h1>

      <div style={styles.grid}>
        {items.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.name} style={styles.image} />
            <h3>{item.name}</h3>
            <p>{item.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Qualites;
