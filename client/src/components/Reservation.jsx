import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Reservation() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    reservationDate: "",
    reservationTime: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Sending Data:", form); // 🔥 DEBUG

    try {
      const res = await axios.post(
        "http://localhost:3000/api/reservation/send",
        form,
      );

      toast.success(res.data.message || "Reservation Done 🎉");
      navigate("/success");
    } catch (error) {
      console.log(error.response?.data); // 🔥 DEBUG
      toast.error(error.response?.data?.message || "Something went wrong ❌");
    }
  };

  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "50px",
      minHeight: "100vh",
      padding: "40px",
      background: "#f5f5f5",
      flexWrap: "wrap",
    },

    imageBox: {
      flex: "1",
      maxWidth: "500px",
      height: "450px",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
    },

    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    formBox: {
      flex: "1",
      maxWidth: "450px",
    },

    formCard: {
      padding: "30px",
      borderRadius: "20px",
      background: "#fff",
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    },

    heading: {
      textAlign: "center",
      marginBottom: "20px",
    },

    inputRow: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      border: "1px solid #ddd",
      padding: "12px",
      borderRadius: "10px",
      marginBottom: "15px",
      background: "#fff",
    },

    input: {
      border: "none",
      outline: "none",
      width: "100%",
    },

    button: {
      width: "100%",
      padding: "12px",
      border: "none",
      background: "#ff4d4d",
      color: "#fff",
      borderRadius: "10px",
      fontWeight: "bold",
      cursor: "pointer",
    },
  };

  return (
    <section style={styles.container}>
      {/* IMAGE */}
      <div style={styles.imageBox}>
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          alt="restaurant"
          style={styles.image}
        />
      </div>

      {/* FORM */}
      <div style={styles.formBox}>
        <div style={styles.formCard}>
          <h2 style={styles.heading}>Book a Table 🍽️</h2>

          <form onSubmit={handleSubmit}>
            <div style={styles.inputRow}>
              <FaUser />
              <input
                name="firstName"
                value={form.firstName}
                placeholder="First Name"
                style={styles.input}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.inputRow}>
              <FaUser />
              <input
                name="lastName"
                value={form.lastName}
                placeholder="Last Name"
                style={styles.input}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.inputRow}>
              <FaEnvelope />
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder="Email"
                style={styles.input}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.inputRow}>
              <FaPhone />
              <input
                name="phone"
                value={form.phone}
                placeholder="Phone"
                style={styles.input}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.inputRow}>
              <input
                type="date"
                name="reservationDate"
                value={form.reservationDate}
                style={styles.input}
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.inputRow}>
              <input
                type="time"
                name="reservationTime"
                value={form.reservationTime}
                style={styles.input}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" style={styles.button}>
              Book Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Reservation;
