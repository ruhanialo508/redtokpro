export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{ fontSize: "3rem" }}>🔥 RedTok</h1>
      <p>Deployment successful. Platform online.</p>
    </main>
  );
}
