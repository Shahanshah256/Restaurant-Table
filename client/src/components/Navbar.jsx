import { useState } from "react";
import { FaUtensils, FaBars } from "react-icons/fa";
// import { data } from "../restApi.json";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "15px 30px",
      backgroundColor: "#111",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: {
      fontSize: "22px",
      fontWeight: "bold",
    },
    links: {
      display: "flex",
      gap: "20px",
      alignItems: "center",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontSize: "16px",
    },
    btn: {
      padding: "8px 18px",
      backgroundColor: "#ff4d4d",
      border: "none",
      color: "#fff",
      borderRadius: "5px",
      cursor: "pointer",
    },
    menuIcon: {
      display: "none",
      fontSize: "24px",
      cursor: "pointer",
    },

    // Mobile styles
    showMenu: {
      position: "absolute",
      top: "60px",
      right: "0",
      backgroundColor: "#111",
      flexDirection: "column",
      width: "200px",
      padding: "20px",
    },
  };
  return (
    <nav style={styles.navbar}>
      {/* Logo with icon */}
      <div style={styles.logo}>
        <FaUtensils /> Foodie
      </div>
      <div style={styles.links} className="">
        <a
          href="/"
          style={{ ...styles.links, textDecoration: "none", color: "#fff" }}
        >
          Home
        </a>
        <Link
          to="/menu"
          style={{ ...styles.links, textDecoration: "none", color: "#fff" }}
        >
          Menu
        </Link>
        <Link
          to="/about"
          style={{ ...styles.links, textDecoration: "none", color: "#fff" }}
        >
          {" "}
          About
        </Link>
        <Link
          to="/contact"
          style={{ ...styles.links, textDecoration: "none", color: "#fff" }}
        >
          Contact
        </Link>
      </div>
      {/* Menu icon */}
      <div style={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </div>
    </nav>
  );
}

export default Navbar;
