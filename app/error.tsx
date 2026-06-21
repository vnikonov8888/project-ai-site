"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0b0b0f",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        gap: "1rem",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", fontWeight: 600, margin: 0 }}>
        Что-то пошло не так
      </h2>
      <button
        onClick={reset}
        style={{
          padding: "0.75rem 2rem",
          borderRadius: "9999px",
          background: "#f5d83d",
          color: "#0b0b0f",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Попробовать снова
      </button>
    </div>
  );
}
