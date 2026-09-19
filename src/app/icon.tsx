import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          background: "linear-gradient(135deg, #5eead4, #a78bfa 55%, #f472b6)",
          color: "#050510",
          fontSize: 28,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        SK
      </div>
    ),
    size
  );
}
