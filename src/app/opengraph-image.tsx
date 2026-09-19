import { ImageResponse } from "next/og";
import { site } from "@/data/portfolio";

export const alt = `${site.name} — ${site.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "radial-gradient(circle at 15% 15%, rgba(167,139,250,0.35), transparent 45%), radial-gradient(circle at 85% 25%, rgba(94,234,212,0.3), transparent 45%), radial-gradient(circle at 30% 90%, rgba(244,114,182,0.25), transparent 45%), #050510",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 84,
            height: 84,
            borderRadius: 20,
            background:
              "linear-gradient(135deg, #5eead4, #a78bfa 55%, #f472b6)",
            color: "#050510",
            fontSize: 34,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          SK
        </div>
        <div style={{ fontSize: 60, fontWeight: 700, color: "#f2f3f8" }}>
          {site.name}
        </div>
        <div
          style={{
            fontSize: 34,
            marginTop: 12,
            background:
              "linear-gradient(100deg, #5eead4, #a78bfa 55%, #f472b6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {site.title}
        </div>
        <div style={{ fontSize: 24, marginTop: 28, color: "#9aa0b4" }}>
          RAG Pipelines · LLM Applications · Voice AI · Explainable ML
        </div>
      </div>
    ),
    size
  );
}
