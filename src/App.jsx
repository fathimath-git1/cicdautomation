import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.logoBox}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} style={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} style={{ ...styles.logo, animation: "spin 6s linear infinite" }} alt="React logo" />
        </a>
      </div>

      <h1 style={styles.title}>Anshida</h1>

      <div style={styles.card}>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Count is {count}
        </button>

        <p style={styles.text}>Edit <b>src/App.jsx</b> and save to test HMR ⚡</p>
      </div>

      <p style={styles.footer}>Click on the logos to explore more 💜</p>

      {/* CSS animation */}
      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
    padding: "20px",
  },
  logoBox: {
    display: "flex",
    gap: "40px",
    marginBottom: "20px",
  },
  logo: {
    width: "80px",
    filter: "drop-shadow(0 0 10px white)",
    transition: "0.3s",
    cursor: "pointer",
  },
  title: {
    fontSize: "50px",
    color: "white",
    fontWeight: "bold",
    textShadow: "0 0 20px pink",
    marginBottom: "10px",
  },
  card: {
    background: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    padding: "25px",
    borderRadius: "20px",
    boxShadow: "0 0 25px rgba(0,0,0,0.3)",
    width: "320px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.3)",
  },
  button: {
    background: "white",
    border: "none",
    padding: "12px 22px",
    borderRadius: "12px",
    fontSize: "22px",
    fontWeight: "600",
    color: "#6a11cb",
    boxShadow: "0 0 10px white",
    transition: "0.3s",
    cursor: "pointer",
  },
  text: {
    color: "white",
    marginTop: "15px",
    fontSize: "16px",
  },
  footer: {
    marginTop: "18px",
    fontSize: "18px",
    color: "white",
    opacity: "0.9",
  },
};

export default App;


