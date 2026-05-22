import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Junk Removal Service USA — Fast, Affordable Junk Removal in Miami & Broward County"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #111827 0%, #14532d 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern — faint circles */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            right: "-120px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            border: "2px solid rgba(22,163,74,0.15)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "350px",
            height: "350px",
            borderRadius: "50%",
            border: "2px solid rgba(22,163,74,0.2)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            border: "2px solid rgba(22,163,74,0.1)",
            display: "flex",
          }}
        />

        {/* Left content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            padding: "64px 72px",
            justifyContent: "space-between",
          }}
        >
          {/* Logo row */}
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "#16a34a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
              }}
            >
              ♻️
            </div>
            <span style={{ color: "#ffffff", fontSize: "22px", fontWeight: 700, letterSpacing: "-0.5px" }}>
              JunkRemovalServiceUSA
            </span>
          </div>

          {/* Main headline */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "680px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(22,163,74,0.2)",
                border: "1px solid rgba(22,163,74,0.4)",
                borderRadius: "100px",
                padding: "6px 18px",
                width: "fit-content",
              }}
            >
              <span style={{ color: "#4ade80", fontSize: "14px", fontWeight: 600, letterSpacing: "0.5px" }}>
                ⚡ SAME-DAY AVAILABLE · SOUTH FLORIDA
              </span>
            </div>

            <div
              style={{
                fontSize: "72px",
                fontWeight: 900,
                color: "#ffffff",
                lineHeight: 1.05,
                letterSpacing: "-2px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span>Junk Removal</span>
              <span style={{ color: "#4ade80" }}>Done Right.</span>
            </div>

            <p
              style={{
                fontSize: "24px",
                color: "#d1d5db",
                lineHeight: 1.4,
                margin: 0,
              }}
            >
              Fast pickup · Upfront pricing · Licensed & insured
            </p>
          </div>

          {/* Trust badges */}
          <div style={{ display: "flex", gap: "24px" }}>
            {[
              { icon: "✅", label: "No Hidden Fees" },
              { icon: "⭐", label: "500+ 5-Star Reviews" },
              { icon: "🌿", label: "Eco-Friendly Disposal" },
              { icon: "🚛", label: "Miami & Broward" },
            ].map((badge) => (
              <div
                key={badge.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "10px",
                  padding: "10px 18px",
                }}
              >
                <span style={{ fontSize: "18px" }}>{badge.icon}</span>
                <span style={{ color: "#e5e7eb", fontSize: "15px", fontWeight: 600 }}>{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side — truck SVG scene */}
        <div
          style={{
            position: "absolute",
            right: "0",
            top: "0",
            width: "420px",
            height: "630px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(22,163,74,0.08)",
            borderLeft: "1px solid rgba(22,163,74,0.2)",
          }}
        >
          {/* Truck SVG */}
          <svg
            width="320"
            height="320"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Ground */}
            <rect x="10" y="155" width="180" height="4" rx="2" fill="rgba(255,255,255,0.15)" />

            {/* Truck body */}
            <rect x="20" y="100" width="110" height="55" rx="6" fill="#16a34a" />

            {/* Truck cab */}
            <rect x="130" y="115" width="50" height="40" rx="5" fill="#15803d" />

            {/* Cab windshield */}
            <rect x="135" y="119" width="38" height="22" rx="3" fill="#111827" opacity="0.6" />

            {/* Truck cargo detail lines */}
            <line x1="55" y1="100" x2="55" y2="155" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
            <line x1="90" y1="100" x2="90" y2="155" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

            {/* Wheels */}
            <circle cx="55" cy="157" r="14" fill="#111827" />
            <circle cx="55" cy="157" r="8" fill="#374151" />
            <circle cx="55" cy="157" r="3" fill="#6b7280" />

            <circle cx="155" cy="157" r="14" fill="#111827" />
            <circle cx="155" cy="157" r="8" fill="#374151" />
            <circle cx="155" cy="157" r="3" fill="#6b7280" />

            {/* Items being loaded */}
            {/* Box 1 */}
            <rect x="28" y="112" width="22" height="18" rx="2" fill="#f59e0b" opacity="0.9" />
            <line x1="39" y1="112" x2="39" y2="130" stroke="#d97706" strokeWidth="1" />
            <line x1="28" y1="121" x2="50" y2="121" stroke="#d97706" strokeWidth="1" />

            {/* Box 2 */}
            <rect x="55" y="118" width="18" height="14" rx="2" fill="#f59e0b" opacity="0.75" />

            {/* Sofa silhouette */}
            <rect x="78" y="120" width="30" height="15" rx="3" fill="#60a5fa" opacity="0.8" />
            <rect x="76" y="116" width="8" height="10" rx="2" fill="#60a5fa" opacity="0.9" />
            <rect x="100" y="116" width="8" height="10" rx="2" fill="#60a5fa" opacity="0.9" />

            {/* Person / crew member */}
            {/* Head */}
            <circle cx="16" cy="108" r="7" fill="#fcd34d" />
            {/* Body */}
            <rect x="11" y="116" width="10" height="18" rx="3" fill="#16a34a" />
            {/* Arms raised */}
            <line x1="11" y1="120" x2="4" y2="113" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
            <line x1="21" y1="120" x2="28" y2="113" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
            {/* Legs */}
            <line x1="14" y1="134" x2="12" y2="145" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />
            <line x1="18" y1="134" x2="20" y2="145" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" />

            {/* Stars / sparkle accents */}
            <circle cx="170" cy="80" r="3" fill="#4ade80" opacity="0.6" />
            <circle cx="30" cy="85" r="2" fill="#4ade80" opacity="0.4" />
            <circle cx="100" cy="75" r="2.5" fill="#4ade80" opacity="0.5" />
          </svg>
        </div>
      </div>
    ),
    { ...size }
  )
}
