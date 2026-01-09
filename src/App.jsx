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
        <p style={styles.text}>Make your project beautiful and powerful</p>
      </div>

      {/* Full-screen CSS reset */}
      <style>
        {`
          html, body, #root {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    background: "linear-gradient(120deg, #1e293b, #0f172a, #4c1d95)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins, sans-serif",
    position: "fixed",
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  name: {
    fontSize: "65px",
    fontWeight: "900",
    color: "white",
    marginBottom: "30px",
    textShadow: "0 0 20px #a78bfa, 0 0 40px #f472b6",
    letterSpacing: "3px",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(15px)",
    padding: "32px",
    borderRadius: "24px",
    boxShadow: "0 0 50px rgba(167,139,250,0.25)",
    width: "350px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.15)",
  },
  button: {
    width: "100%",
    background: "#a78bfa",
    border: "none",
    padding: "16px",
    borderRadius: "16px",
    fontSize: "26px",
    fontWeight: "700",
    color: "#0f172a",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(167,139,250,0.4)",
    transition: "0.3s",
  },
  text: {
    color: "white",
    marginTop: "18px",
    fontSize: "18px",
    opacity: "0.9",
  },
};

export default App;
