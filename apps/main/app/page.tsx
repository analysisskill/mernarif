"use client";

const apps = [
  { name: "Arif Hossain", path: "/arifhossain", color: "#6366f1" },
  { name: "Sahamid", path: "/sahamid", color: "#8b5cf6" },
  { name: "Zahangir Alam Litton", path: "/zahangir-alam-litton", color: "#a855f7" },
  { name: "Calculator", path: "/Calculator", color: "#d946ef" },
  { name: "Arif Fullstack", path: "/ariffullstack", color: "#ec4899" },
];

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: 800,
          background: "linear-gradient(135deg, #6366f1, #a855f7, #ec4899)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "0.5rem",
          textAlign: "center",
        }}
      >
        TurboArifff
      </h1>
      <p
        style={{
          color: "#94a3b8",
          fontSize: "1.1rem",
          marginBottom: "3rem",
          textAlign: "center",
        }}
      >
        All apps in one place
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {apps.map((app) => (
          <a
            key={app.path}
            href={app.path}
            style={{
              display: "block",
              padding: "2rem",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              textDecoration: "none",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.borderColor = app.color;
              e.currentTarget.style.boxShadow = `0 8px 30px ${app.color}33`;
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: `${app.color}22`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1rem",
                fontSize: "1.5rem",
              }}
            >
              🚀
            </div>
            <h2
              style={{
                color: "#f1f5f9",
                fontSize: "1.25rem",
                fontWeight: 600,
                margin: "0 0 0.5rem 0",
              }}
            >
              {app.name}
            </h2>
            <p
              style={{
                color: "#64748b",
                fontSize: "0.9rem",
                margin: 0,
              }}
            >
              {app.path} →
            </p>
          </a>
        ))}
      </div>

      <footer
        style={{
          marginTop: "4rem",
          color: "#475569",
          fontSize: "0.85rem",
        }}
      >
        Built with Turborepo + Vercel
      </footer>
    </div>
  );
}
