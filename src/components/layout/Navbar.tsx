import { CSSProperties } from "react";

const NavLogo = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="17" stroke="white" strokeWidth="1.2" opacity="0.7" />
    <g transform="translate(18,18)">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => (
        <ellipse key={i} cx="0" cy="-6" rx="2.5" ry="5.5" fill="white"
          transform={`rotate(${a})`} opacity="0.8" />
      ))}
      <circle cx="0" cy="0" r="2.5" fill="white" />
    </g>
  </svg>
);

const menuBar: CSSProperties = {
  display: "block", width: 18, height: 2,
  background: "#fff", borderRadius: 2,
};

const Navbar = () => {
  return (
    <nav style={{
        // --- Fixed Positioning Logic ---
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000, // Increased to ensure it stays above all other content
        // -------------------------------
        display: "flex", 
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 28px", 
        background: "#0000",
        boxSizing: "border-box" // Prevents padding from adding to the 100% width
      }}>
        <NavLogo />
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button style={{
            display: "flex", alignItems: "center", gap: 8,
            background: "#3b6ef5", color: "#fff", border: "none",
            borderRadius: 100, padding: "10px 20px", fontSize: 14,
            fontWeight: 500, cursor: "pointer", letterSpacing: "0.01em",
            fontFamily: "'DM Sans', sans-serif",
          }}>
            Start a Project
            <div style={{
              width: 18, height: 18, background: "rgba(255,255,255,0.2)",
              borderRadius: "50%", display: "flex",
              alignItems: "center", justifyContent: "center",
            }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
                stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
          </button>

          <button style={{
            width: 42, height: 42, background: "#f5a623", border: "none",
            borderRadius: "50%", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 4, cursor: "pointer",
          }} aria-label="Menu">
            <span style={menuBar} />
            <span style={menuBar} />
            <span style={menuBar} />
          </button>
        </div>
      </nav>
  )
}

export default Navbar;