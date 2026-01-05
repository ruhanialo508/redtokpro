export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        🔥 RedTok
      </h1>
      <p style={{ opacity: 0.8, marginBottom: "2rem" }}>
        Short-video engine prototype is live
      </p>

      <button
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => alert("Feed coming next 🚀")}
      >
        Enter Feed
      </button>
    </main>
  );
}
