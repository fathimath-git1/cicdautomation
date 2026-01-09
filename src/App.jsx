import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.name}>FATHIMATH ANSHIDA V</h1>

      <div style={styles.card}>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Count is {count}
        </button>
        <p style={styles.text}>Make your project beautiful and powerful 🚀</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0f172a", // deep navy
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
    padding: "20px",
  },
  name: {
    fontSize: "55px",
    fontWeight: "800",
    background: "linear-gradient(to right, #f472b6, #a78bfa, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow: "0 0 30px rgba(236,72,153,0.5)",
    marginBottom: "25px",
    letterSpacing: "2px",
  },
  card: {
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    padding: "28px",
    borderRadius: "22px",
    boxShadow: "0 0 40px rgba(167,139,250,0.3)",
    width: "330px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  button: {
    width: "100%",
    background: "#a78bfa", // soft violet
    border: "none",
    padding: "14px",
    borderRadius: "14px",
    fontSize: "24px",
    fontWeight: "700",
    color: "#0f172a",
    cursor: "pointer",
    transition: "0.3s",
    boxShadow: "0 0 20px rgba(167,139,250,0.4)",
  },
  text: {
    color: "white",
    marginTop: "16px",
    fontSize: "17px",
    opacity: "0.85",
  },
};

// Hover effect added globally
const globalStyle = document.createElement("style");
globalStyle.innerHTML = `
  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 25px #f472b6;
  }
`;
document.head.appendChild(globalStyle);

export default App;
